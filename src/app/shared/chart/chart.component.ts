import {
  Component,
  ViewChild,
  OnChanges,
  AfterViewInit,
  Input,
} from '@angular/core';
import * as Chart from 'chart.js';
import randomcolor = require('randomcolor');

type Dataset = {
  label: string;
  data: Array<number|{x: number, y: number, r?: number }>;
  backgroundColor?: string|string[];
  borderColor?: string|string[];
  pointBackgroundColor?: string|string[];
  borderWidth?: number;
};

@Component({
  selector: 'admin-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges, AfterViewInit {
  @Input() width = 400;
  @Input() height = 400;
  @Input() lib: string;
  @Input() type: string;
  @Input() labels: string[];
  @Input() datasets: Dataset|Dataset[];
  @ViewChild('canvas') canvasEl: any;

  private chart: Chart;
  private chartType: string;

  ngOnChanges(): void {
    this.drawChart();
  }

  ngAfterViewInit(): void {
    this.drawChart();
  }

  private drawChart(): void {
    if (!this.canvasEl) {
      return;
    }

    switch (this.lib) {
      case 'chart-js':
        this.drawChartJS();
        break;

      case 'c3-js':
        this.drawC3JS();
        break;

      case 'morris-js':
        this.drawMorrisJS();
        break;

      default:
        throw new Error(`Unsupported chart library: ${this.lib}`);
    }
  }

  private drawChartJS(): void {
    if (!this.chart || this.chartType !== 'chart-js') {
      this.chartType = 'chart-js';
      const ctx = this.canvasEl.nativeElement;
      ctx.width = this.width;
      ctx.height = this.height;
      this.processChartJSDatasets();
      const data = {
        labels: this.labels,
        datasets: this.datasets,
      };
      const options = {
        legend: {
          display: (data.datasets as Dataset[]).length > 1,
        }
      };
      this.chart = new Chart(ctx, {
        data,
        options,
        type: this.type,
      });
    } else {
      this.processChartJSDatasets();
      (this.chart.data as any).datasets = this.datasets;
      this.chart.update();
    }
  }

  private processChartJSDatasets(): void {
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

  private drawC3JS(): void {
  }

  private drawMorrisJS(): void {
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
