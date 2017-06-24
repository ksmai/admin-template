import { Component } from '@angular/core';

/**
 * Demonstrate the usage of {@link ChartJSChartComponent}
 */
@Component({
  templateUrl: './chart-js-demo.component.html',
  styleUrls: ['./chart-js-demo.component.scss'],
})
export class ChartJSDemoComponent {
  charts = [
    {
      header: 'Bar chart',
      type: 'bar',
      labels: ['Apple', 'Orange', 'Pineapple', 'Grape', 'Banana'],
      datasets: {
        label: '# of fruits',
        data: [3, 5, 9, 1, 2],
      },
    },
    {
      header: 'Horizontal bar chart',
      type: 'horizontalBar',
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Angular',
          data: [10, 9, 8, 7, 8, 6],
        },
        {
          label: 'React',
          data: [3, 3, 6, 4, 5, 5],
        },
      ],
    },
    {
      header: 'Line chart',
      type: 'line',
      labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
      datasets: [
        {
          label: 'vim users',
          data: [10, 9, 8, 7, 8, 6],
        },
        {
          label: 'emacs user',
          data: [3, 3, 6, 4, 5, 5],
        },
      ],
    },
    {
      header: 'Radar chart',
      type: 'radar',
      labels: ['Speed', 'Power', 'Height', 'Weight', 'Life expectancy'],
      datasets: [
        {
          label: 'Lion',
          data: [5, 5, 2, 3, 3],
        },
        {
          label: 'Red Panda',
          data: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      header: 'Pie chart',
      type: 'pie',
      labels: ['A', 'B', 'C'],
      datasets: {
        data: [1, 2, 3],
      },
    },
    {
      header: 'Doughnut chart',
      type: 'doughnut',
      labels: ['X', 'Y', 'Z'],
      datasets: [{
        data: [3, 4, 3],
      }],
    },
    {
      header: 'Polar area chart',
      type: 'polarArea',
      labels: ['P', 'Q', 'R', 'S', 'T'],
      datasets: {
        data: [10, 13, 25, 17, 20],
      },
    },
    {
      header: 'Bubble chart',
      type: 'bubble',
      datasets: {
        label: 'My data',
        data: [
          { x: 3, y: 1, r: 10 },
          { x: 2, y: 2, r: 30 },
          { x: 1, y: 3, r: 20 },
        ],
      },
    },
  ];
}
