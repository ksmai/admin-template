import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CalendarDemoComponent } from './calendar-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    CalendarDemoComponent,
  ],
})
export class CalendarModule {
}
