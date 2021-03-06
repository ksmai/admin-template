import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as c3 from 'c3';

type Column = Array<string|number>;

/**
 * A simple wrapper around c3.js charting library
 *
 * @exmaple
 * <admin-c3js-chart
 *   [columns]="[
 *     ['data1', -30, 200, 200, 400, -150, 250],
 *     ['data2', 130, 100, -100, 200, -150, 50],
 *     ['data3', -230, 200, 200, -300, 250, 250]
 *   ]"
 *   type="bar"
 *   [group]="true"
 * ></admin-c3js-chart>
 */
@Component({
  selector: 'admin-c3js-chart',
  templateUrl: './c3js-chart.component.html',
  styleUrls: ['./c3js-chart.component.scss'],
})
export class C3JSChartComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() columns: Column|Column[];
  @Input() type: string;
  @Input() group: boolean;
  @Input() x: string|{ [key: string]: string };
  @Input() subchart: boolean = false;
  @Input() colorPattern: string[];
  @Input() showAxis: boolean = true;
  @Input() showLegend: boolean = true;
  @ViewChild('div') divEl: any;

  private chart: any;

  ngOnChanges(): void {
    setTimeout(() => this.drawChart(), 0);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.drawChart(), 0);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.unload({ done: () => this.chart.destroy() });
    }
  }

  private drawChart(): void {
    if (!this.divEl) {
      return;
    }

    this.processColumns();

    if (this.chart) {
      this.chart.load({ columns: this.columns });
      return;
    }

    // stack the data if this.group is true
    const data = {
      columns: this.columns as Column[],
      type: this.type,
    };
    if (this.group) {
      Object.assign(data, {
        groups: [(this.columns as Column[]).map((col) => col[0])],
      });
    }

    // handle timeseries data
    const axis = {};
    if (this.type === 'timeseries' || this.type === 'timeseries-area') {
      Object.assign(axis, {
        x: {
          type: 'timeseries',
          tick: { format: '%Y-%m-%d' },
        },
      });
      if (this.type === 'timeseries-area') {
        data.type = 'area';
      } else {
        data.type = undefined;
      }
    }

    if (!this.showAxis) {
      Object.assign(axis, {
        x: { show: false },
        y: { show: false },
      });
    }

    // handle x-axis
    if (typeof this.x === 'string') {
      Object.assign(data, {
        x: this.x,
      });
    } else if (typeof this.x === 'object') {
      Object.assign(data, {
        xs: this.x,
      });
    }

    // Add a horizontal line to separate postive and negative data
    const hasNegative = data.columns.some(
      (col) => col.some((pt) => pt < 0),
    );
    const grid = {};
    if (hasNegative) {
      Object.assign(grid, {
        y: {
          lines: [
            { value: 0 },
          ],
        },
      });
    }

    // add some colors for gauge
    const color = {};
    if (this.type === 'gauge') {
      Object.assign(color, {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100],
        },
      });
    } else if (this.colorPattern) {
      Object.assign(color, { pattern: this.colorPattern });
    }

    const subchart = {
      show: this.subchart,
    };

    const legend = {
      show: this.showLegend,
    };

    this.chart = c3.generate({
      data,
      grid,
      axis,
      color,
      subchart,
      legend,
      bindto: this.divEl.nativeElement,
    });
  }

  private processColumns(): void {
    if (!Array.isArray(this.columns[0])) {
      this.columns = [this.columns as Column];
    }
  }
}
