import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
