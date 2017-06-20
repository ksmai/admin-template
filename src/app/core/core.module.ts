import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { VexDialogService } from './vex-dialog.service';
import { MessengerService } from './messenger.service';

@NgModule({
  imports: [
  ],

  providers: [
    AuthGuard,
    MessengerService,
    UserService,
    VexDialogService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule should only be imported once');
    }
  }
}
