import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { TopnavComponent } from './topnav.component';

@NgModule({
  imports: [
    RouterModule,
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
