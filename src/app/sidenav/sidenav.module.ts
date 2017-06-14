import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
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
