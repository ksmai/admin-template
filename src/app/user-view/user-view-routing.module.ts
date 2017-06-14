import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserViewComponent } from './user-view.component';

import { blogRoutes } from '../blog/blog.routes';
import { calenderRoutes } from '../calender/calender.routes';
import { chartRoutes } from '../chart/chart.routes';
import { codemirrorRoutes } from '../codemirror/codemirror.routes';
import { dashboardRoutes } from '../dashboard/dashboard.routes';
import { editorRoutes } from '../editor/editor.routes';
import {
  fileUtilitiesRoutes,
} from '../file-utilities/file-utilities.routes';
import { fontRoutes } from '../font/font.routes';
import { formRoutes } from '../form/form.routes';
import { galleryRoutes } from '../gallery/gallery.routes';
import { gridRoutes } from '../grid/grid.routes';
import {
  interactiveTimelineRoutes,
} from '../interactive-timeline/interactive-timeline.routes';
import { mailboxRoutes } from '../mailbox/mailbox.routes';
import { mapRoutes } from '../map/map.routes';
import { panelRoutes } from '../panel/panel.routes';
import { paymentRoutes } from '../payment/payment.routes';
import { socialRoutes } from '../social/social.routes';
import {
  staticTimelineRoutes,
} from '../static-timeline/static-timeline.routes';
import { tableRoutes } from '../table/table.routes';
import { uiElementRoutes } from '../ui-element/ui-element.routes';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    children: [
      ...dashboardRoutes,
      ...mailboxRoutes,
      ...galleryRoutes,
      ...socialRoutes,
      ...blogRoutes,
      ...panelRoutes,
      ...chartRoutes,
      ...staticTimelineRoutes,
      ...interactiveTimelineRoutes,
      ...codemirrorRoutes,
      ...mapRoutes,
      ...editorRoutes,
      ...uiElementRoutes,
      ...formRoutes,
      ...tableRoutes,
      ...gridRoutes,
      ...calenderRoutes,
      ...fileUtilitiesRoutes,
      ...fontRoutes,
      ...paymentRoutes,
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [
    RouterModule,
  ],
})
export class UserViewRoutingModule {
}
