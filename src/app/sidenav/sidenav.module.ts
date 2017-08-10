import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SidenavAlertsComponent } from './alerts/sidenav-alerts.component';
import {
  SidenavFriendsComponent,
} from './friends/sidenav-friends.component';
import { SidenavGraphsComponent } from './graphs/sidenav-graphs.component';
import { SidenavLinksComponent } from './links/sidenav-links.component';
import { SidenavComponent } from './sidenav.component';
import {
  SidenavTimelineComponent,
} from './timeline/sidenav-timeline.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    SharedModule,
  ],

  declarations: [
    SidenavComponent,
    SidenavAlertsComponent,
    SidenavLinksComponent,
    SidenavGraphsComponent,
    SidenavTimelineComponent,
    SidenavFriendsComponent,
  ],

  exports: [
    SidenavComponent,
  ],
})
export class SidenavModule {
}
