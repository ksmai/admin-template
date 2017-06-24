import { Component } from '@angular/core';

/**
 * Demonstrate the usage of {@link MorrisJSChartComponent}
 * Example data are from http://morrisjs.github.io/morris.js
 */
@Component({
  templateUrl: './morris-js-demo.component.html',
  styleUrls: ['./morris-js-demo.component.scss'],
})
export class MorrisJSDemoComponent {
  charts = [
    {
      header: 'Line chart',
      type: 'line',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75, b: 65 },
        { y: '2008', a: 50, b: 40 },
        { y: '2009', a: 75, b: 65 },
        { y: '2010', a: 50, b: 40 },
        { y: '2011', a: 75, b: 65 },
        { y: '2012', a: 100, b: 90 },
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
    },
    {
      header: 'Area chart',
      type: 'area',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 },
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
    },
    {
      header: 'Bar chart',
      type: 'bar',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 },
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
    },
    {
      header: 'Donut chart',
      type: 'donut',
      data: [
        { label: 'Download Sales', value: 12 },
        { label: 'In-Store Sales', value: 30 },
        { label: 'Mail-Order Sales', value: 20 },
      ],
    },
  ];
}
