import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SocialComponent } from './social.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    SocialComponent,
  ],
})
export class SocialModule {
}
