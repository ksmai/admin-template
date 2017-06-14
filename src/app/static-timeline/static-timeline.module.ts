import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  StaticTimelineDemoComponent,
} from './static-timeline-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    StaticTimelineDemoComponent,
  ],
})
export class StaticTimelineModule {
}
