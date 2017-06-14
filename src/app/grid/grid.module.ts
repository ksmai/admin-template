import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GridDemoComponent } from './grid-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    GridDemoComponent,
  ],
})
export class GridModule {
}
