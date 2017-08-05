import { Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class DashboardVisitorComponent {
  visitorData = {
    subchart: true,
    type: 'timeseries-area',
    x: 'time',
    colorPattern: ['#4890e2'],
    columns: [
      ['time', '2016-06-06', '2016-07-13', '2016-08-21', '2016-09-30',
        '2016-11-13', '2016-12-25', '2017-01-01', '2017-02-04',
        '2017-03-09', '2017-04-26', '2017-05-25', '2017-06-26',
        '2017-07-10', '2017-08-05', '2017-09-01', '2017-10-10',
        '2017-11-30'],
      ['# visitors', 20, 30, 50, 70, 60, 55, 40, 43, 32, 24, 39, 40,
        50, 66, 77, 88, 150],
    ],
  };
}
