import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],

  declarations: [
    SidenavComponent,
  ],

  exports: [
    SidenavComponent,
  ],
})
export class SidenavModule {
}
