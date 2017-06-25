import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';

import { MessengerService } from '../../core/messenger.service';

/**
 * Demonstrate the usage of {@link MessengerService}
 * Some examples adapted from http://github.hubspot.com/messenger/
 */
@Component({
  templateUrl: './messenger-demo.component.html',
  styleUrls: ['./messenger-demo.component.scss'],
})
export class MessengerDemoComponent {
  constructor(private messengerService: MessengerService) {
  }

  triggerBasic(): void {
    this.messengerService.basic('Welcome to the darkside (tm)');
  }

  triggerInfo(): void {
    this.messengerService.info(
      `View the source code at
        <a href="https://github.com/ksmai/admin-template"
          style="color: #2eb398" target="_blank">
            https://github.com/ksmai/admin-template</a>`,
      'github_url',
    );
  }

  triggerError(): void {
    this.messengerService.error(
      'Oh no! An error has occurred!',
      'naive_error',
    );
  }

  triggerSuccess(): void {
    this.messengerService.success(
      'Congratulations! You succeeded!',
      'random_success',
    );
  }

  triggerNotification(): void {
    this.messengerService.notification(
      'Please wait for 3 seconds',
      'Well, it failed',
      Observable.interval(3000),
      'notification_id',
    );
  }

  triggerLaunch(): void {
    this.messengerService.action(
      'Launching rocket...',
      { type: 'success', message: 'Cancelled', label: 'cancel' },
    );
  }

  triggerChoice(): void {
    this.messengerService.action(
      'Make a choice Neo',
      { type: 'success', message: 'Success', label: 'Blue pill' },
      { type: 'error', message: 'Fail', label: 'Red pill' },
    );
  }

  topLeft(): void {
    this.messengerService.topLeft();
  }

  top(): void {
    this.messengerService.top();
  }

  topRight(): void {
    this.messengerService.topRight();
  }

  bottomLeft(): void {
    this.messengerService.bottomLeft();
  }

  bottom(): void {
    this.messengerService.bottom();
  }

  bottomRight(): void {
    this.messengerService.bottomRight();
  }
}
