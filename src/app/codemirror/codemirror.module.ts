import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CodemirrorDemoComponent } from './codemirror-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    CodemirrorDemoComponent,
  ],
})
export class CodemirrorModule {
}
