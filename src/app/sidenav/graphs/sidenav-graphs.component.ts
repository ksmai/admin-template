import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-sparkline';

/**
 * Render the graphs tab inside sidenav
 */
@Component({
  selector: 'admin-sidenav-graphs',
  templateUrl: './sidenav-graphs.component.html',
  styleUrls: ['./sidenav-graphs.component.scss'],
})
export class SidenavGraphsComponent {
  polarData = {
    type: 'polarArea',
    sparkline: true,
    labels: ['foo', 'bar', 'baz', 'qoo', 'zoo'],
    datasets: { data: [3, 5, 9, 4, 7] },
    width: 100,
    height: 100,
    opaque: true,
  };

  @ViewChild('stockTrend') private stockTrendEl: ElementRef;
  @ViewChild('stockBars') private stockBarsEl: ElementRef;
  @ViewChild('stockBars2') private stockBarsEl2: ElementRef;
  @ViewChild('nasdaq') private nasdaqEl: ElementRef;
  @ViewChild('dow') private dowEl: ElementRef;
  @ViewChild('gender') private genderEl: ElementRef;

  initSparklines(): void {
    ($(this.stockTrendEl.nativeElement) as any)
      .sparkline(
        [71, 70, 41, 33, 46, 95, 1, 26, 16, 18, 54, 98, 69, 0, 65, 6,
          93, 20, 4, 57, 25, 21, 86, 35, 58, 50, 99, 46, 93, 41],
        {
          type: 'line',
          width: '200px',
          height: '50px',
          fillColor: 'rgba(121, 176, 236, .7)',
          lineColor: 'rgba(121, 176, 236, 1)',
        },
      );

    ($(this.stockBarsEl.nativeElement) as any)
      .sparkline(
        [5, 2, 5, 12, 10, 13, 5, 3],
        {
          type: 'bar',
          height: '30px',
          barColor: 'rgb(234, 120, 130)',
        },
      );

    ($(this.stockBarsEl2.nativeElement) as any)
      .sparkline(
        [1, 3, 12, 8, 0, 11, 9],
        {
          type: 'bar',
          height: '30px',
          barColor: 'rgb(85, 201, 166)',
        },
      );

    ($(this.nasdaqEl.nativeElement) as any)
      .sparkline(
        [6, 3, 0, 4, 8, 0, 8, 2, 3, 5, 8, 5, 7, 7, 0, 4, 2, 3, 1, 1,
          9, 6, 0, 8, 9],
        {
          type: 'line',
          height: '25px',
          lineColor: 'rgba(255, 196, 151, 1)',
          fillColor: false,
        },
      );

    ($(this.dowEl.nativeElement) as any)
      .sparkline(
        [8, 7, 9, 0, 3, 4, 1, 5, 8, 6, 2, 3, 2, 4, 6, 0, 9, 9, 0,
          0, 0, 0, 2, 2, 2],
        {
          type: 'line',
          height: '25px',
          lineColor: 'rgba(252, 182, 33, 1)',
          fillColor: false,
        },
      );

    ($(this.dowEl.nativeElement) as any)
      .sparkline(
        [8, 7, 9, 0, 3, 4, 1, 5, 8, 6, 2, 3, 2, 4, 6, 0, 9, 9, 0,
          0, 0, 0, 2, 2, 2],
        {
          type: 'bar',
          height: '25px',
          barColor: 'rgba(255, 255, 255, .2)',
          composite: true,
        },
      );

    ($(this.genderEl.nativeElement) as any)
      .sparkline(
        [[7, 3], [8, 6], [4, 7], [3, 8], [0, 3], [4, 2], [3, 4], [5, 2],
        [1, 2], [2, 4], [8, 9], [1, 3], [3, 8], [1, 0], [3, 7], [1, 5],
        [1, 6], [3, 0], [2, 4], [6, 6], [5, 8], [7, 1], [7, 1], [9, 2],
        [3, 9], [4, 1], [1, 2], [1, 4], [2, 3], [4, 3], [4, 2], [7, 3]],
        {
          type: 'bar',
          height: '40px',
          barWidth: 5,
          stackedBarColor: ['rgb(165, 199, 236)', 'rgb(227, 148, 179)'],
        },
      );
  }
}
