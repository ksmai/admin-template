import { Component } from '@angular/core';

import { VexDialogService } from '../../core/vex-dialog.service';

// example dialog codes from http://github.hubspot.com/vex/api/basic/
@Component({
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.scss'],
})
export class ModalDemoComponent {
  constructor(private vexDialogService: VexDialogService) {
  }

  openAlert() {
    this.vexDialogService.alert('Thanks for checking out vex!');
  }

  openConfirm() {
    this.vexDialogService.confirm(
      'Are you absolutely sure you want to destroy the alien planet?',
    )
      .subscribe((res: boolean) => {
        if (res) {
          this.vexDialogService
            .alert('Successfully destroyed the planet.');
        } else {
          this.vexDialogService.alert('Chicken');
        }
      });
  }

  openPrompt() {
    this.vexDialogService
      .prompt('What planet did the aliens come from?', 'Planet name')
      .subscribe((value: string) => {
        this.vexDialogService
          .alert(
            `Callback value:
            <span style="font-weight: bold">${value}</span>`,
            true,
          );
      });
  }

  openLogin() {
    const message = 'Enter your username and password:';
    const input = [
      '<input name="username" type="text" placeholder="Username" required>',
      '<input name="password" type="password" placeholder="Password" required />',
    ].join('');
    this.vexDialogService
      .open(message, input)
      .subscribe((data: any) => {
        if (!data) {
          this.vexDialogService.alert('Cancelled');
        } else {
          this.vexDialogService
            .alert(`Username: ${data.username}
Password: ${data.password}`);
        }
      });
  }

  openPicker() {
    const todayDateString = new Date().toJSON().slice(0, 10);
    const message = 'Select a date and color.';
    const input = [
      '<style>',
        '.vex-custom-field-wrapper {',
            'margin: 1em 0;',
          '}',
          '.vex-custom-field-wrapper > label {',
            'display: inline-block;',
            'margin-bottom: .2em;',
          '}',
      '</style>',
      '<div class="vex-custom-field-wrapper">',
        '<label for="date">Date</label>',
        '<div class="vex-custom-input-wrapper">',
          '<input name="date" type="date" value="' + todayDateString + '" />',
        '</div>',
      '</div>',
      '<div class="vex-custom-field-wrapper">',
        '<label for="color">Color</label>',
        '<div class="vex-custom-input-wrapper">',
          '<input name="color" type="color" value="#ff00cc" />',
        '</div>',
      '</div>' ].join('');
    this.vexDialogService
      .open(message, input)
      .subscribe((data: any) => {
        if (!data) {
          this.vexDialogService.alert('Cancelled');

          return;
        }

        const html = [
          '<h4>Result</h4>',
          '<p>',
            'Date: <b>' + data.date + '</b><br/>',
            'Color: <input type="color" value="' +
              data.color + '" readonly />',
          '</p>',
        ].join('');
        this.vexDialogService.alert(html, true);
      });
  }
}
