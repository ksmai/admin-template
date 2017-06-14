import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DropzoneDemoComponent } from './dropzone/dropzone-demo.component';
import {
  ImageCroppingDemoComponent,
} from './image-cropping/image-cropping-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    DropzoneDemoComponent,
    ImageCroppingDemoComponent,
  ],
})
export class FileUtilitiesModule {
}
