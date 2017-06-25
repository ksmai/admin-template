import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
// uglifyJS error
// import 'bootstrap-slider/src/js/bootstrap-slider';
import 'bootstrap-slider/dist/bootstrap-slider';
import 'bootstrap-slider/src/sass/bootstrap-slider.scss';
import $ = require('jquery');

/**
 * A component wrapping around bootstrap-slider
 * Inputs:
 *   min: string|number, default to 0
 *   max: string|number
 *   step: string|number, default to 1
 *   value: string|number, accept two-way-data-binding as `[(value)]="x"`
 *   range: whether selection is a range rather than a single value,
 *          default to false, can be omitted if value is an array
 *   disabled: default to false
 *   vertical: default to false
 *   reversed: default to false
 *   handle: shape of the handle, 'round' (defualt) | 'square' | 'triangle'
 *   tooltip: 'show' (default) | 'always' | 'hide'
 *   color: color of the selection range
 *   colorHandle: whether to apply color to the handle, default to false
 *
 * Output:
 *   valueChange: can be used in two-way-data-binding, see Inputs for detail
 *
 * @example
 * <admin-bootstrap-slider
 *   min="0"
 *   max="255"
 *   [(value)]="b"
 *   color="blue"
 *   handle="triangle"
 *   [colorHandle]="true"
 * ></admin-bootstrap-slider>
 */
@Component({
  selector: 'admin-bootstrap-slider',
  templateUrl: './bootstrap-slider.component.html',
  styleUrls: ['./bootstrap-slider.component.scss'],
})
export class BootstrapSliderComponent implements AfterViewInit, OnChanges {
  @Input() min: string|number = 0;
  @Input() max: string|number;
  @Input() step: string|number = 1;
  @Input() value: string|number;
  @Input() range: string|boolean = false;
  @Input() disabled: string|boolean = false;
  @Input() vertical: string|boolean = false;
  @Input() reversed: string|boolean = false;
  @Input() handle: string = 'round';
  @Input() tooltip: string = 'show';
  @Output() valueChange = new EventEmitter<number|number[]>();
  @HostBinding('class') @Input() color: string;
  @HostBinding('attr.data-color-handle') @Input() colorHandle = false;
  @ViewChild('inputEl') private inputEl: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      ($(this.inputEl.nativeElement) as any)
        .slider()
        .on('change', (evt: any) => this.onSlide(evt.value.newValue));
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (Array.isArray(this.value)) {
      // bootstrap-slider requires value as string
      this.value = JSON.stringify(this.value);
    }
    if (changes.disabled) {
      if (!changes.disabled.firstChange) {
        ($(this.inputEl.nativeElement) as any).slider('toggle');
      }
    }
  }

  onSlide(value: number|number[]): void {
    this.valueChange.emit(value);
  }
}
