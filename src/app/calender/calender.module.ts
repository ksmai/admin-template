import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CalenderDemoComponent } from './calender-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    CalenderDemoComponent,
  ],
})
export class CalenderModule {
}
