import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    FooterComponent,
  ],

  exports: [
    FooterComponent,
  ],
})
export class FooterModule {
}
