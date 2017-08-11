import { Component, ElementRef, ViewChild } from '@angular/core';
import $ = require('jquery');
import 'jquery-sparkline';

import {
  IEvent,
} from '../../shared/static-timeline/static-timeline.component';

/**
 * Renders the alerts tab inside sidenav
 */
@Component({
  selector: 'admin-sidenav-alerts',
  templateUrl: './sidenav-alerts.component.html',
  styleUrls: ['./sidenav-alerts.component.scss'],
})
export class SidenavAlertsComponent {
  events: IEvent[] = [{
    date: 'SOME ALERTS',
    templates: [0, 1],
  }, {
    date: 'MORE ALERTS',
    templates: [2, 3],
  }];

  colors = ['rgb(215, 31, 75)', 'rgb(252, 182, 33)'];
  sliceColors = [
    'rgb(234, 120, 130)',
    'rgb(121, 176, 236)',
    'rgb(180, 161, 221)',
    'rgb(255, 196, 151)',
    'rgb(85, 201, 166)',
  ];

  @ViewChild('detectedSparkline') detectedEl: ElementRef;
  @ViewChild('someDataSparkline') someDataEl: ElementRef;
  @ViewChild('moreDataSparkline1') moreDataEl1: ElementRef;
  @ViewChild('moreDataSparkline2') moreDataEl2: ElementRef;
  @ViewChild('moreDataSparkline3') moreDataEl3: ElementRef;
  @ViewChild('moreDataSparkline4') moreDataEl4: ElementRef;

  initSparklines(): void {
    ($(this.detectedEl.nativeElement) as any)
      .sparkline(
        [93, 72, 51, 94, 27, 69, 91, 86, 71, 29, 40, 52, 20, 13, 99, 5,
          37, 71, 13, 4, 0, 20, 73, 73, 38, 6, 49, 78, 76, 74, 78, 70,
          33, 8, 70, 29, 49, 22, 98, 65, 56, 30, 37, 53, 64, 62, 90,
          83, 31, 66],
        {
          type: 'bar',
          height: '40px',
          barWidth: 2,
          barColor: this.colors[0],
        },
      );

    ($(this.someDataEl.nativeElement) as any)
      .sparkline(
        [47, 19, 80, 53, 10, 61, 91, 44, 71, 54, 64, 59, 92, 28, 78,
          82, 4, 29, 6, 76, 64, 0, 27, 62, 25, 42, 39, 66, 54],
        {
          type: 'bar',
          height: '30px',
          barColor: this.colors[1],
        },
      );

    ($(this.moreDataEl1.nativeElement) as any)
      .sparkline([30, 70], {
        type: 'pie',
        width: '30px',
        height: '30px',
        sliceColors: this.sliceColors,
      });

    ($(this.moreDataEl2.nativeElement) as any)
      .sparkline([7, 2, 5], {
        type: 'pie',
        width: '30px',
        height: '30px',
        sliceColors: this.sliceColors,
      });

    ($(this.moreDataEl3.nativeElement) as any)
      .sparkline([6, 4, 9, 8], {
        type: 'pie',
        width: '30px',
        height: '30px',
        sliceColors: this.sliceColors,
      });

    ($(this.moreDataEl4.nativeElement) as any)
      .sparkline([20, 42, 69, 54, 96], {
        type: 'pie',
        width: '30px',
        height: '30px',
        sliceColors: this.sliceColors,
      });

  }
}
