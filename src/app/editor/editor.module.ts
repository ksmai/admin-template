import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EditorDemoComponent } from './editor-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    EditorDemoComponent,
  ],
})
export class EditorModule {
}
