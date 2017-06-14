import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PanelDemoComponent } from './panel-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    PanelDemoComponent,
  ],
})
export class PanelModule {
}
