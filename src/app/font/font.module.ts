import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FontDemoComponent } from './font-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    FontDemoComponent,
  ],
})
export class FontModule {
}
