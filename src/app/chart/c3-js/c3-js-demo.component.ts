import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './c3-js-demo.component.html',
  styleUrls: ['./c3-js-demo.component.scss'],
})
export class C3JSDemoComponent implements OnInit, OnDestroy {
  charts = [
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25],
      ],
    },
    {
      columns: [
        ['data1', -30, 200, 200, 400, -150, 250],
        ['data2', 130, 100, -100, 200, -150, 50],
        ['data3', -230, 200, 200, -300, 250, 250],
      ],
      type: 'bar',
      group: true,
    },
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'bar',
    },
    {
      columns: [
        ['time', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 340, 200, 500, 250, 350],
      ],
      type: 'timeseries',
    },
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'spline',
    },
    {
      columns: [
        ['data1', 300, 350, 300, 0, 0, 100],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'step',
    },
    {
      columns: [
        ['data1', 300, 350, 300, 0, 0, 0],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'area',
    },
    {
      // iris data from R
      columns: [
        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
      ],
      type: 'pie',
    },
    {
      columns: ['data', 100],
      type: 'gauge',
    },
  ];

  private interval: number;

  ngOnInit(): void {
    const gaugeData: [string, number] = ['data', 10];
    let columns = [gaugeData];
    this.charts.push({
      columns,
      type: 'gauge',
    });
    setTimeout(() => {
      console.log('time is up');
      columns = [['data', 100]];
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
