import { Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

export const blogRoutes: Routes = [
  {
    path: 'blog',
    children: [
      { path: 'post', component: PostComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', redirectTo: 'posts' },
    ],
  },
];
