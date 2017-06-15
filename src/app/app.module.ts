import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/styles.scss';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CalenderModule } from './calender/calender.module';
import { ChartModule } from './chart/chart.module';
import { CodemirrorModule } from './codemirror/codemirror.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EditorModule } from './editor/editor.module';
import {
  FileUtilitiesModule,
} from './file-utilities/file-utilities.module';
import { FontModule } from './font/font.module';
import { FormModule } from './form/form.module';
import { GalleryModule } from './gallery/gallery.module';
import { GridModule } from './grid/grid.module';
import {
  InteractiveTimelineModule,
} from './interactive-timeline/interactive-timeline.module';
import { MailboxModule } from './mailbox/mailbox.module';
import { MapModule } from './map/map.module';
import { PanelModule } from './panel/panel.module';
import { PaymentModule } from './payment/payment.module';
import { SocialModule } from './social/social.module';
import {
  StaticTimelineModule,
} from './static-timeline/static-timeline.module';
import { TableModule } from './table/table.module';
import { UIElementModule } from './ui-element/ui-element.module';
import { UserViewModule } from './user-view/user-view.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModule,
    MailboxModule,
    GalleryModule,
    SocialModule,
    BlogModule,
    PanelModule,
    ChartModule,
    CodemirrorModule,
    MapModule,
    EditorModule,
    UIElementModule,
    FormModule,
    TableModule,
    GridModule,
    CalenderModule,
    FontModule,
    PaymentModule,
    FileUtilitiesModule,
    InteractiveTimelineModule,
    StaticTimelineModule,
    AuthModule,
    UserViewModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
