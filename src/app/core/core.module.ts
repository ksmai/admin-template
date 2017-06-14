import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [
  ],

  providers: [
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule should only be imported once');
    }
  }
}
