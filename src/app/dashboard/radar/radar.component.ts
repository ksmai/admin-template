import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-sparkline';

/**
 * Renders the radar inside dashboard
 */
@Component({
  selector: 'admin-dashboard-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss'],
})
export class DashboardRadarComponent implements AfterViewInit {
  radarData = {
    type: 'radar',
    width: 100,
    height: 60,
    sparkline: true,
    labels: ['Angular', 'React', 'Vue', 'Ember', 'Backbone', 'Knockout'],
    datasets: [
      {
        label: 'Popularity',
        data: [6, 9, 5, 4, 4, 3],
      },
      {
        label: 'Complexity',
        data: [10, 8, 5, 6, 7, 7],
      },
    ],
  };

  perf = [10, 20, 50, 60, 45, 61, 79];
  size = [100, 92, 98, 70, 45, 60, 55];
  visitor = [55, 40, 10, 42, 24, 70, 59];
  revenue = [60, 50, 55, 30, 60, 65, 72];

  @ViewChild('sparklinePerf') sparklinePerf: ElementRef;
  @ViewChild('sparklineSize') sparklineSize: ElementRef;
  @ViewChild('sparklineVisitor') sparklineVisitor: ElementRef;
  @ViewChild('sparklineRevenue') sparklineRevenue: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => this.initSparklines(), 0);
  }

  private initSparklines(): void {
    ($(this.sparklinePerf.nativeElement) as any)
      .sparkline(this.perf, {
        lineColor: 'rgb(234, 120, 130)',
        fillColor: 'rgb(227, 148, 179)',
        width: '54px',
        height: '25px',
      });
    ($(this.sparklineSize.nativeElement) as any)
      .sparkline(this.size, {
        lineColor: 'rgb(85, 201, 166)',
        fillColor: 'rgb(160, 223, 204)',
        width: '54px',
        height: '25px',
      });
    ($(this.sparklineVisitor.nativeElement) as any)
      .sparkline(this.visitor, {
        lineColor: 'rgb(121, 176, 236)',
        fillColor: 'rgb(165, 199, 236)',
        width: '54px',
        height: '25px',
      });
    ($(this.sparklineRevenue.nativeElement) as any)
      .sparkline(this.revenue, {
        lineColor: 'rgb(250, 221, 127)',
        fillColor: 'rgb(222, 188, 133)',
        width: '54px',
        height: '25px',
      });
  }
}
