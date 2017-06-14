import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
  ],

  providers: [
    AuthGuard,
    UserService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule should only be imported once');
    }
  }
}
