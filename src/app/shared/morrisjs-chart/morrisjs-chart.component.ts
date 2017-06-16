import {
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

// morris.js exports a global variable Morris
import 'morris.js/morris.css';
import 'morris.js/morris.js';

/**
 * A simple wrapper for morris.js charting library
 * supported types include line, bar, donut and area
 *
 * @example
 * <admin-morrisjs-chart
 *   type="line"
 *   [data]="[{ y: 1, t: '2016' },{ y: 2, t: '2017' },{ y: 4, t: '2018' }]"
 *   xkey="t"
 *   [ykeys]="['y']"
 *   [labels]="['data']"
 * ></admin-morrisjs-chart>
 */
@Component({
  selector: 'admin-morrisjs-chart',
  templateUrl: './morrisjs-chart.component.html',
  styleUrls: ['./morrisjs-chart.component.scss'],
})
export class MorrisJSChartComponent implements OnInit {
  @Input() type: string;
  @Input() data: Array<{ [key: string]: number }>;
  @Input() xkey: string;
  @Input() ykey: string;
  @Input() ykeys: string[];
  @Input() label: string;
  @Input() labels: string[];

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.drawChart();
  }

  private drawChart(): void {
    this.checkInput();

    // Morris works by side effect
    // tslint:disable-next-line:no-unused-expression
    new (Morris[this.type] as any)({
      element: this.el.nativeElement,
      data: this.data,
      xkey: this.xkey,
      ykeys: this.ykeys,
      labels: this.labels,
    });
  }

  private checkInput(): void {
    if (!this.type) {
      throw new Error('No type for morris.js chart');
    }
    if (!this.data) {
      throw new Error('No data for morris.js chart');
    }

    this.typeToTitlecase();
    // wrap ykeys and labels in an array, if provided as a single value
    if (!this.ykeys) {
      this.ykeys = [this.ykey];
    }
    if (!this.labels) {
      this.labels = [this.label];
    }
  }

  private typeToTitlecase(): void {
    this.type = this.type[0].toUpperCase() +
      this.type.slice(1).toLowerCase();
  }
}
