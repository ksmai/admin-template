import { Routes } from '@angular/router';

import { DropzoneDemoComponent } from './dropzone/dropzone-demo.component';
import {
  ImageCroppingDemoComponent,
} from './image-cropping/image-cropping-demo.component';

export const fileUtilitiesRoutes: Routes = [
  {
    path: 'file-utilities',
    children: [
      { path: 'dropzone', component: DropzoneDemoComponent },
      { path: 'image-cropping', component: ImageCroppingDemoComponent },
      { path: '**', redirectTo: 'dropzone' },
    ],
  },
];
