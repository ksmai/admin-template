import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { C3JSDemoComponent } from './c3-js/c3-js-demo.component';
import { ChartJSDemoComponent } from './chart-js/chart-js-demo.component';
import {
  MorrisJSDemoComponent,
} from './morris-js/morris-js-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    C3JSDemoComponent,
    ChartJSDemoComponent,
    MorrisJSDemoComponent,
  ],
})
export class ChartModule {
}
