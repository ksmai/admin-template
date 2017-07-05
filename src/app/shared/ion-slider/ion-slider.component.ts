/* tslint:disable:variable-name */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinFlat.css';
import 'ion-rangeslider/js/ion.rangeSlider';

/**
 * A component wrapping around ion-rangeslider
 * Inputs:
 *   - type: 'single' (default) | 'double'
 *   - min: default to 0
 *   - max: default to 100
 *   - from: optional initial value for the first handle
 *   - to: optional initial value for the second handle (for double type)
 *   - step: default to 1
 *   - values: An array of custom labels to be displayed for each value
 *   - hide_min_max: Hide minimum/maximum values (default to false)
 *   - hide_from_to: Hide tooptip on the handles (default to false)
 *   - grid: default to false
 *   - grid_num: default to 4
 *   - prefix: prefix for each displayed value
 *   - postfix: postfix for each displayed value
 *   - max_postfix: postfix only for the maximum value (e.g. 0 - 100+)
 *
 * Output:
 *   - change: a payload object emitted during creation / on change
 *
 * @example
 * <admin-ion-slider
 *   postfix="pounds"
 *   [from]="25000000"
 *   [to]="35000000"
 *   [max]="100000000"
 *   [min]="1000000"
 *   type="double"
 *   (change)="onChange($event)"
 * ></admin-ion-slider>
 */
@Component({
  selector: 'admin-ion-slider',
  templateUrl: './ion-slider.component.html',
  styleUrls: ['./ion-slider.component.scss'],
})
export class IonSliderComponent implements AfterViewInit, OnDestroy {
  @Input() type: string = 'single';
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() from: number;
  @Input() to: number;
  @Input() step: number = 1;
  @Input() values: string[];
  @Input() hide_min_max: boolean = false;
  @Input() hide_from_to: boolean = false;
  @Input() grid: boolean = false;
  @Input() grid_num: number = 4;
  @Input() prefix: string = '';
  @Input() postfix: string = '';
  @Input() max_postfix: string = '';
  @Output() change = new EventEmitter<any>();
  @ViewChild('inputEl') private inputEl: any;

  ngOnDestroy(): void {
    const slider = ($(this.inputEl.nativeElement) as any)
      .data('ionRangeSlider');
    if (slider) {
      slider.destroy();
    }
  }

  ngAfterViewInit(): void {
    const options = {
      type: this.type,
      min: this.min,
      max: this.max,
      step: this.step,
      hide_min_max: this.hide_min_max,
      hide_from_to: this.hide_from_to,
      prefix: this.prefix,
      postfix: this.postfix,
      max_postfix: this.max_postfix,
      grid: this.grid,
      grid_num: this.grid_num,
      onChange: (payload: any) => this.onChange(payload),
      onUpdate: (payload: any) => this.onChange(payload),
    };

    if (this.from !== undefined) {
      Object.assign(options, { from: this.from });
    }
    if (this.to !== undefined) {
      Object.assign(options, { to: this.to });
    }
    if (this.values !== undefined) {
      Object.assign(options, { values: this.values });
    }

    setTimeout(() => {
      ($(this.inputEl.nativeElement) as any).ionRangeSlider(options);
    }, 0);
    // make sure the first change event is emitted
    setTimeout(() => {
      $(this.inputEl.nativeElement).data('ionRangeSlider' as any).reset();
    }, 0);
  }

  private onChange(payload: any): void {
    const {
      min,
      max,
      from,
      from_percent,
      from_value,
      to,
      to_percent,
      to_value,
    } = payload;
    const safePayload = {
      min,
      max,
      from,
      from_percent,
      from_value,
      to,
      to_percent,
      to_value,
    };
    this.change.emit(safePayload);
  }
}
