import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    PostComponent,
    PostsComponent,
  ],
})
export class BlogModule {
}
