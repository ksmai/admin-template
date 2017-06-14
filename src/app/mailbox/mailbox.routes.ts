import { Routes } from '@angular/router';

import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { MailComponent } from './mail/mail.component';

export const mailboxRoutes: Routes = [
  {
    path: 'mailbox',
    children: [
      { path: 'inbox', component: InboxComponent },
      { path: 'mail', component: MailComponent },
      { path: 'compose', component: ComposeComponent },
      { path: '**', redirectTo: 'inbox' },
    ],
  },
];
