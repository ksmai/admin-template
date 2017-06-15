import { Component } from '@angular/core';

@Component({
  templateUrl: './chart-js-demo.component.html',
  styleUrls: ['./chart-js-demo.component.scss'],
})
export class ChartJSDemoComponent {
  charts = [
    {
      type: 'bar',
      labels: ['Apple', 'Orange', 'Pineapple', 'Grape', 'Banana'],
      datasets: {
        label: '# of fruits',
        data: [3, 5, 9, 1, 2],
      },
    },
    {
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
      type: 'pie',
      labels: ['A', 'B', 'C'],
      datasets: {
        data: [1, 2, 3],
      },
    },
    {
      type: 'doughnut',
      labels: ['X', 'Y', 'Z'],
      datasets: [{
        data: [3, 4, 3],
      }],
    },
    {
      type: 'polarArea',
      labels: ['P', 'Q', 'R', 'S', 'T'],
      datasets: {
        data: [10, 13, 25, 17, 20],
      },
    },
    {
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
