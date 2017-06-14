import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TopnavComponent } from './topnav.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    TopnavComponent,
  ],

  exports: [
    TopnavComponent,
  ],
})
export class TopnavModule {
}
