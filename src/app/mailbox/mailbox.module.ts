import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],

  declarations: [
    InboxComponent,
    MailComponent,
    ComposeComponent,
  ],
})
export class MailboxModule {
}
