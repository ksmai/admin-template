import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SocialPostComponent } from './social-post/social-post.component';
import { SocialComponent } from './social.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    SocialComponent,
    SocialPostComponent,
  ],
})
export class SocialModule {
}
