import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  imports: [
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
