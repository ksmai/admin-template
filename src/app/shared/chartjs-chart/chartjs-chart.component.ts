import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as Chart from 'chart.js';
import randomcolor = require('randomcolor');

interface IDataset {
  label: string;
  data: Array<number|{x: number, y: number, r?: number }>;
  backgroundColor?: string|string[];
  borderColor?: string|string[];
  pointBackgroundColor?: string|string[];
  borderWidth?: number;
}

/**
 * A simple wrapper around Chart.js
 *
 * @exmaple
 * <admin-chartjs-chart
 *  type="bar"
 *  [labels]="['Apple', 'Orange', 'Pineapple', 'Grape', 'Banana']"
 *  [datasets]="{ label: '# of fruits', data: [3, 5, 9, 1, 2] }"
 *  [width]="1000"
 *  [height]="300"
 * ></admin-chartjs-chart>
 */
@Component({
  selector: 'admin-chartjs-chart',
  templateUrl: './chartjs-chart.component.html',
  styleUrls: ['./chartjs-chart.component.scss'],
})
export class ChartJSChartComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() width = 400;
  @Input() height = 400;
  @Input() type: string;
  @Input() labels: string[];
  @Input() datasets: IDataset|IDataset[];
  @Input() sparkline: boolean = false;
  @ViewChild('canvas') private canvasEl: any;

  private chart: any;

  ngOnChanges(): void {
    setTimeout(() => this.drawChart(), 0);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.drawChart(), 0);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private drawChart(): void {
    if (!this.canvasEl) {
      return;
    }

    this.processDatasets();
    if (!this.chart) {
      const ctx = this.canvasEl.nativeElement;
      ctx.width = this.width;
      ctx.height = this.height;
      const data = {
        labels: this.labels,
        datasets: this.datasets,
      };
      const options = {
        legend: {
          display: (data.datasets as IDataset[]).length > 1,
        },
      };
      if (this.sparkline) {
        options.legend.display = false;
        Object.assign(options, {
          scale: {
            ticks: { display: false },
          },
        });
      }
      this.chart = new Chart(ctx, {
        data,
        options,
        type: this.type,
      });
    } else {
      this.chart.data.datasets = this.datasets;
      this.chart.update();
    }
  }

  private processDatasets(): void {
    if (Array.isArray(this.datasets) && this.datasets.length > 1) {
        const colors = this.generateColors(this.datasets.length);
        this.datasets.forEach((dataset, idx) => {
          dataset.backgroundColor = colors.transparent[idx];
          dataset.borderColor = colors.opaque[idx];
          dataset.pointBackgroundColor = colors.opaque[idx];
          dataset.borderWidth = 1;
        });
    } else {
      if (!Array.isArray(this.datasets)) {
        this.datasets = [this.datasets];
      }
      const colors = this.generateColors(this.datasets[0].data.length);
      this.datasets[0].backgroundColor = colors.transparent;
      this.datasets[0].borderColor = colors.opaque;
      this.datasets[0].pointBackgroundColor = colors.opaque;
      this.datasets[0].borderWidth = 1;
    }
  }

  private generateColors(
    count: number,
  ): { transparent: string[], opaque: string[] } {
    const rgbArray = randomcolor({
      count,
      format: 'rgb',
      luminosity: 'bright',
    }) as any as string[];

    return {
      transparent: rgbArray.map((rgb) => this.rgb2rgba(rgb, 0.2)),
      opaque: rgbArray.map((rgb) => this.rgb2rgba(rgb, 1)),
    };
  }

  private rgb2rgba(rgb: string, alpha: number) {
    return rgb.replace(/\)$/, `, ${alpha})`).replace(/^rgb/, 'rgba');
  }
}
