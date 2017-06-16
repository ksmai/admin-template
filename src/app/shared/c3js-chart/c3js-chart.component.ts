import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  AfterViewInit,
} from '@angular/core';
import * as c3 from 'c3';

type Column = Array<string|number>;

@Component({
  selector: 'admin-c3js-chart',
  templateUrl: './c3js-chart.component.html',
  styleUrls: ['./c3js-chart.component.scss'],
})
export class C3JSChartComponent implements OnChanges, AfterViewInit {
  @Input() columns: Column|Column[];
  @Input() type: string;
  @Input() group: boolean;
  @Input() x: string|{ [key: string]: string };
  @ViewChild('div') divEl: any;

  private chart: any;

  ngOnChanges(): void {
    this.drawChart();
  }

  ngAfterViewInit(): void {
    this.drawChart();
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
    if (this.type === 'timeseries') {
      Object.assign(axis, {
        x: {
          type: 'timeseries',
          tick: { format: '%Y-%m-%d' },
        },
      });
      data.type = undefined;
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
    };

    // add some colors for gauge
    const color = {};
    if (this.type === 'gauge') {
      Object.assign(color, {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100],
        },
      });
    }

    this.chart = c3.generate({
      data,
      grid,
      axis,
      color,
      bindto: this.divEl.nativeElement,
    });
  }

  private processColumns(): void {
    if (!Array.isArray(this.columns[0])) {
      this.columns = [this.columns as Column];
    }
  }
}
