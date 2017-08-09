import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from '@angular/core';

import { VexDialogService } from '../core/vex-dialog.service';

@Component({
  selector: 'admin-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnChanges {
  @Input() alwaysShowSidenav: boolean;
  @Output() alwaysShowSidenavChange = new EventEmitter<boolean>();

  @Input() navColor: string;
  @Output() navColorChange = new EventEmitter<string>();

  colorClass: { [key: string]: boolean };

  constructor(private vexDialogService: VexDialogService) {
  }

  ngOnChanges() {
    this.colorClass = {
      [`topnav--${this.navColor}`]: true,
    };
  }

  toggleSidenav(): void {
    this.alwaysShowSidenav = !this.alwaysShowSidenav;
    this.alwaysShowSidenavChange.emit(this.alwaysShowSidenav);
  }

  changeNavColor(color: string): void {
    this.navColor = color;
    this.navColorChange.emit(this.navColor);
  }

  openColorModal(): void {
    const styles = `
      <style>
        .color-picker__header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: 0;
          padding: 10px 20px;
          background-color: #666;
        }
        .vex.vex-theme-flat-attack .vex-content .color-picker__header {
          color: #fff;
        }
        .color-picker__radio {
          display: none;
        }
        .color-picker__label {
          display: inline-block;
          border-radius: 6px;
          width: 50px;
          height: 50px;
          margin: 10px;
          position: relative;
          cursor: pointer;
        }
        .color-picker__label--pinkishred {
          background-color: rgb(239, 107, 103);
        }
        .color-picker__label--green {
          background-color: rgb(85, 201, 166);
        }
        .color-picker__label--blue {
          background-color: rgb(121, 176, 236);
        }
        .color-picker__label--purple {
          background-color: rgb(180, 161, 221);
        }
        .color-picker__label--brown {
          background-color: rgb(168, 85, 58);
        }
        .color-picker__label--paleyellow {
          background-color: rgb(222, 188, 133);
        }
        .color-picker__radio:checked + .color-picker__label:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 50px;
          color: #fff;
          content: "\\F00C";
          font-family: "FontAwesome";
        }
      </style>
    `;
    const html = '<h3 class="color-picker__header">Choose a color</h3>';
    const inputs = [
      'pinkishred',
      'green',
      'blue',
      'purple',
      'brown',
      'paleyellow'
    ].map((color: string) => {
      return `
        <input
          type="radio"
          name="color"
          value="${color}"
          class="color-picker__radio"
          id="color-picker__radio--${color}"
          ${color === this.navColor ? 'checked' : ''}
        >
        <label
          for="color-picker__radio--${color}"
          class="color-picker__label color-picker__label--${color}"
        ></label>
      `;
    }).join('');
    this.vexDialogService.open('', styles + html + inputs)
      .subscribe((data: any) => {
        if (data && data.color) {
          this.changeNavColor(data.color);
        }
      });
  }
}
