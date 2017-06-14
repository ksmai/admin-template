import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  InteractiveTimelineDemoComponent,
} from './interactive-timeline-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    InteractiveTimelineDemoComponent,
  ],
})
export class InteractiveTimelineModule {
}
