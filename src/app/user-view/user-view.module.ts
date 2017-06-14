import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserViewComponent } from './user-view.component';
import { UserViewRoutingModule } from './user-view-routing.module';
import { TopnavModule } from '../topnav/topnav.module';
import { SidenavModule } from '../sidenav/sidenav.module';

@NgModule({
  imports: [
    SharedModule,
    TopnavModule,
    SidenavModule,
    UserViewRoutingModule,
  ],

  declarations: [
    UserViewComponent,
  ],
})
export class UserViewModule {
}
