import { Injectable } from '@angular/core';
import 'messenger/build/css/messenger-theme-flat.css';
import 'messenger/build/css/messenger.css';
import 'messenger/build/js/messenger';
import 'messenger/build/js/messenger-theme-flat';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';
declare const Messenger: any;
Messenger.options = {
  theme: 'flat',
};

interface IAction {
  message: string;
  type: string;
  label: string;
}

/**
 * A service wrapping around HubSpot/messenger
 * Featuring message types basic, info, error, success, actions, and
 * layout customization
 *
 * Primary theme used is "flat"
 */
@Injectable()
export class MessengerService {
  /**
   * @param {string} message - message to post
   * @return the messenger instance
   */
  basic(message: string) {
    return this.post({
      message,
    });
  }

  /**
   * Post some info as a singleton identified by its unique id
   * @param {string} message - message to post
   * @param {string} [id="info"] - the unique id of the message
   * @return the messenger instance
   */
  info(message: string, id: string = 'info') {
    return this.post({
      message,
      id,
      type: 'info',
      singleton: true,
    });
  }

  /**
   * Post some errors as a singleton identified by its unique id
   * @param {string} message - error message
   * @param {string} [id="error"] - unique id of the error
   * @return the messenger instance
   */
  error(message: string, id: string = 'error') {
    return this.post({
      message,
      id,
      type: 'error',
      singleton: true,
    });
  }

  /**
   * At most one message with the same ID is shown at a time
   * @param {string} message - the success message
   * @param {string} [id="success"] - the unique id of the message
   * @return the messenger instance
   */
  success(message: string, id: string = 'success') {
    return this.post({
      message,
      id,
      type: 'success',
    });
  }

  /**
   * A self-updating message
   * @param {string} firstMessage - the initial message
   * @param {string} secondMessage - the updated message
   * @param {Observable<any>} obs - the observable that, when emits, update
   * the message from firstMessage to secondMessage
   * @param {string} [id="notification"] - the unique id of the message
   */
  notification(
    firstMessage: string,
    secondMessage: string,
    obs: Observable<any>,
    id = 'notification',
  ) {
    const messenger = this.post({
      id,
      message: firstMessage,
      type: 'info',
    });
    obs.first().subscribe(() => {
      messenger.update({
        type: 'error',
        message: secondMessage,
      });
    });
  }

  /**
   * Message with actionable buttons
   * @param {string} message - the initial message
   * @param {IAction[]} ...actions - the gathered actions with type, label
   * and message
   */
  action(message: string, ...actions: IAction[]) {
    let messenger: any;
    const options = { message, actions: {} };
    for (const action of actions) {
      options.actions[action.label] = {
        label: action.label,
        action: () => {
          messenger.update({
            type: action.type,
            message: action.message,
            actions: false,
          });
        },
      };
    }
    messenger = Messenger().post(options);
  }

  /**
   * Move the messages to the top left corner
   */
  topLeft(): void {
    this.changeLayout('messenger-fixed messenger-on-left messenger-on-top');
  }

  /**
   * Move the messages to the top
   */
  top(): void {
    this.changeLayout('messenger-fixed messenger-on-top');
  }

  /**
   * Move the messages to the top right corner
   */
  topRight(): void {
    this.changeLayout('messenger-fixed messenger-on-right messenger-on-top');
  }

  /**
   * Move the messages to the bottom left corner
   */
  bottomLeft(): void {
    this.changeLayout('messenger-fixed messenger-on-left messenger-on-bottom');
  }

  /**
   * Move the messages to the bottom
   */
  bottom(): void {
    this.changeLayout('messenger-fixed messenger-on-bottom');
  }

  /**
   * Move the messages to the bottom right corner
   */
  bottomRight(): void {
    this.changeLayout('messenger-fixed messenger-on-right messenger-on-bottom');
  }

  /**
   * Internal implementation of layout update
   * @param {string} classes - a string of space-separated classes to apply
   */
  private changeLayout(classes: string) {
    Messenger({ extraClasses: classes }).post({
      message: classes,
      type: 'info',
      id: 'layout-updating-message',
    });
  }

  /**
   * Internal implementation of message posting
   * @param {any} options - an option object to use
   */
  private post(options: any): any {
    options.hideAfter = 10;
    return Messenger().post(options);
  }
}
