import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-knob/js/jquery.knob';

/**
 * A component wrapper around jquery-knob
 * Inputs:
 *   - min: default to 0
 *   - max: default to 100
 *   - step: default to 1
 *   - angleOffset: default to 0. Define the starting point of the gauge
 *   - angleArc: default to 360. Size of the full arc
 *   - stopper: Stop keyboard/mousescroll at min & max. Default to true
 *   - rotation: direction of progression. Default to 'clockwise'
 *   - value: initial value. Default to 0. Can be 2-way-bound / dynamically
 *            set
 *   - capRounded: gauge stroke ending. Default to false
 *   - displayInput: display the number in middle. Default to true
 *   - displayPrevious: display previous value while changing. Default false
 *   - fgColor, inputColor, bgColor: color strings
 *   - width, height: number, size of the knob
 *   - thickness: gauge thickness
 *
 * - Output
 *    valueChange: emit new value. Can be two-way-bounded
 *
 * @example
 * <admin-knob
 *  [value]="35"
 *  fgColor="#ffc497"
 *  inputColor="#ffc497"
 *  [angleArc]="250"
 *  [angleOffset]="-125"
 * ></admin-knob>
 */
@Component({
  selector: 'admin-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class KnobComponent implements AfterViewInit, OnChanges {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() angleOffset: number = 0;
  @Input() angleArc: number = 360;
  @Input() stopper: boolean = true;
  @Input() rotation: string = 'clockwise';
  @Input() value: number = 0;
  @Input() capRounded: boolean = false;
  @Input() displayInput: boolean = true;
  @Input() displayPrevious: boolean = false;
  @Input() fgColor: string = '#4a90e2';
  @Input() inputColor: string = '#4a90e2';
  @Input() bgColor: string = '#eee';
  @Input() cursor: number;
  @Input() width: number;
  @Input() height: number;
  @Input() thickness: number;
  @Output() valueChange = new EventEmitter<number>();
  @ViewChild('inputEl') private inputEl: any;

  ngAfterViewInit(): void {
    const options = {
      min: this.min,
      max: this.max,
      step: this.step,
      angleOffset: this.angleOffset,
      angleArc: this.angleArc,
      stopper: this.stopper,
      rotation: this.rotation,
      lineCap: this.capRounded ? 'round' : 'butt',
      displayInput: this.displayInput,
      displayPrevious: this.displayPrevious,
      fgColor: this.fgColor,
      bgColor: this.bgColor,
      inputColor: this.inputColor,
      change: (value: number) => this.onChange(value),
    };

    ['cursor', 'width', 'height', 'thickness'].forEach((key) => {
      if (this[key] !== undefined) {
        Object.assign(options, { [key]: this[key] });
      }
    });

    ($(this.inputEl.nativeElement) as any).knob(options);
    ($(this.inputEl.nativeElement) as any)
      .val(this.value)
      .trigger('change');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      ($(this.inputEl.nativeElement) as any)
        .val(changes.value.currentValue)
        .trigger('change');
    }
  }

  private onChange(value: number): void {
    this.valueChange.emit(value);
  }
}
