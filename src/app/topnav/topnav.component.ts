import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-sparkline';

import { VexDialogService } from '../core/vex-dialog.service';

@Component({
  selector: 'admin-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnChanges, AfterViewInit {
  @Input() alwaysShowSidenav: boolean;
  @Output() alwaysShowSidenavChange = new EventEmitter<boolean>();

  @Input() navColor: string;
  @Output() navColorChange = new EventEmitter<string>();

  colorClass: { [key: string]: boolean };
  locale: string = 'us';
  locales: string[] = ['us', 'fr', 'it', 'de', 'sa', 'hk'];
  languages = {
    us: ['English - U.S.', 'French', 'Italian', 'German', 'Arabic',
      'Traditional Chinese'],

    fr: ['iAnglais - États-Unis', 'français', 'allemand',
      'italien', 'arabe', 'Chinois traditionnel'],

    it: ['Inglese - U.S.', 'francese', 'Tedesco', 'italiano',
      'Arabo', 'Cinese tradizionale'],

    de: ['Amerikanisches Englisch.', 'Französisch', 'Deutsche',
      'Italienisch', 'Arabisch', 'Traditionelles Chinesisch'],

    sa: ['الإنجليزية - الولايات المتحدة', 'الفرنسية', 'ألمانية',
      'الإيطالي', 'عربى', 'الصينية التقليدية'],

    hk: ['英文 - 美國', '法文', '德語', '意大利語', '阿拉伯語',
      '繁體中文'],
  };

  @Input() boxed = false;
  @Output() boxedChange = new EventEmitter<boolean>();

  @ViewChild('sparkline') sparklineEl: ElementRef;

  constructor(private vexDialogService: VexDialogService) {
  }

  ngOnChanges() {
    this.colorClass = {
      [`topnav--${this.navColor}`]: true,
    };
  }

  ngAfterViewInit() {
    ($(this.sparklineEl.nativeElement) as any).sparkline(
      [11, 12, 10, 5, 8, 2, 4, 4, 8, 9, 8, 11, 6, 17, 10, 17, 3, 2, 11, 13],
      {
        type: 'bar',
        barColor: '#4c5d67',
        barWidth: 10,
        height: '50px',
      },
    );
  }

  toggleSidenav(): void {
    this.alwaysShowSidenav = !this.alwaysShowSidenav;
    this.alwaysShowSidenavChange.emit(this.alwaysShowSidenav);
    setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
  }

  changeBoxed(boxed: boolean): void {
    this.boxed = boxed;
    this.boxedChange.emit(this.boxed);
    setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
  }

  changeNavColor(color: string): void {
    this.navColor = color;
    this.navColorChange.emit(this.navColor);
  }

  changeLocale(locale: string): void {
    this.locale = locale;
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
      'paleyellow',
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
