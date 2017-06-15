import { NgModule } from '@angular/core';

import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../shared/shared.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { TopnavModule } from '../topnav/topnav.module';
import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './user-view.component';

@NgModule({
  imports: [
    SharedModule,
    FooterModule,
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
