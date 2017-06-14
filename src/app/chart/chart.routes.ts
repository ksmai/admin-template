import { Routes } from '@angular/router';

import { C3JSDemoComponent } from './c3-js/c3-js-demo.component';
import { ChartJSDemoComponent } from './chart-js/chart-js-demo.component';
import {
  MorrisJSDemoComponent,
} from './morris-js/morris-js-demo.component';

export const chartRoutes: Routes = [
  {
    path: 'charts',
    children: [
      { path: 'chartjs', component: ChartJSDemoComponent },
      { path: 'c3js', component: C3JSDemoComponent },
      { path: 'morrisjs', component: MorrisJSDemoComponent },
      { path: '**', redirectTo: 'chartjs' },
    ],
  },
];
