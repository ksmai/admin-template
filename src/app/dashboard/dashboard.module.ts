import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardCalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardDataComponent } from './data/data.component';
import {
  DashboardDemographicsComponent,
} from './demographics/demographics.component';
import { DashboardMapComponent } from './map/map.component';
import { DashboardRadarComponent } from './radar/radar.component';
import { DashboardRevenueComponent } from './revenue/revenue.component';
import { DashboardVisitorComponent } from './visitor/visitor.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    DashboardComponent,
    DashboardVisitorComponent,
    DashboardDemographicsComponent,
    DashboardMapComponent,
    DashboardCalendarComponent,
    DashboardRadarComponent,
    DashboardDataComponent,
    DashboardRevenueComponent,
  ],
})
export class DashboardModule {
}
