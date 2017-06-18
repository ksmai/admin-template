import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { IDropdown, IDropdownOption } from '../button/button.component';

/**
 * Construct a dropdown button using button group in {@link ButtonComponent}
 * Inputs:
 *   - text: required, string to be displayed on the button
 *   - options: required, array of dropdown options with optional flags:
 *     - isHeader: default to false
 *     - disabled: default to false
 *   - hover: show dropdown menu on hover, default to false
 *   - disabled: disable the dropdown button
 *   - tag, color, inverse, outlined, split, dropup : see
 *       {@link ButtonComponent}
 *   - clickBtn: same as {@link ButtonComponent}
 */
@Component({
  selector: 'admin-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnChanges {
  @Input() text: string;
  @Input() options: Array<string|IDropdownOption> = [];
  @Input() tag: string;
  @Input() color: string;
  @Input() inverse: boolean = false;
  @Input() outlined: boolean = false;
  @Input() hover: boolean = false;
  @Input() split: boolean = false;
  @Input() dropup: boolean = false;
  @Input() disabled: boolean = false;
  @Output() clickBtn = new EventEmitter<any>();
  texts: [IDropdown];

  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    this.texts = [{
      text: this.text,
      options: this.options,
      dropup: this.dropup,
      split: this.split,
      disabled: this.disabled,
    }];
  }

  onClick(payload: any) {
    this.clickBtn.emit(payload);
  }

  @HostListener('mouseenter')
  private onHover() {
    if (!this.hover) {
      return;
    }

    const el = this.el.nativeElement.querySelector('.btn-group .btn-group');
    if (!el.classList.contains('open')) {
      el.classList.add('open');
    }
  }

  @HostListener('mouseleave')
  private onLeave() {
    if (!this.hover) {
      return;
    }

    const el = this.el.nativeElement.querySelector('.btn-group .btn-group');
    if (el.classList.contains('open')) {
      el.classList.remove('open');
    }
  }
}
