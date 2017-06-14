import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MapDemoComponent } from './map-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    MapDemoComponent,
  ],
})
export class MapModule {
}
