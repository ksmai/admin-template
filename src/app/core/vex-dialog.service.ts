import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as vex from 'vex-js';
import 'vex-js/sass/vex-theme-flat-attack.sass';
import 'vex-js/sass/vex.sass';
(vex as any).registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-flat-attack';

/**
 * A service wrapper for vex dialogs
 */
@Injectable()
export class VexDialogService {
  /**
   * Open a simple alert window with only a OK button
   * @param {string} message - The message/html to be displayed
   * @param {boolean} [unsafe=false] - If message is html, set this to true
   */
  alert(message: string, unsafe = false): void {
    if (unsafe) {
      (vex as any).dialog.alert({ unsafeMessage: message });
    } else {
      (vex as any).dialog.alert(message);
    }
  }

  /**
   * A confirm window with a choice between OK and cancel
   * @param {string} message - the message to be confirmed
   * @return {Observable<boolean>} true if confirmed, false otherwise
   */
  confirm(message: string): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      (vex as any).dialog.confirm({
        message,
        callback(value: boolean) {
          observer.next(value);
          observer.complete();
        },
      });
    });
  }

  /**
   * A prompt with a single form control
   * @param {string} message - the message to prompt for
   * @param {string} [placeholder=''] - placeholder in the form
   * @return {Observable<string>} the submitted value
   */
  prompt(message: string, placeholder = ''): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      (vex as any).dialog.prompt({
        message,
        placeholder,
        callback(value: string) {
          observer.next(value);
          observer.complete();
        },
      });
    });
  }

  /**
   * A general dialog window that can contain anything, including
   * multiple form controls
   * @param {string} message - the main message
   * @param {string} input - the html that can contain some controls
   * @return {Observable<any>} the data submitted
   */
  open(message: string, input: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      (vex as any).dialog.open({
        message,
        input,
        callback(data: any) {
          observer.next(data);
          observer.complete();
        },
      });
    });
  }
}
