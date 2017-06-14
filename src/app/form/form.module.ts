import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ControlDemoComponent } from './control/control-demo.component';
import { WizardDemoComponent } from './wizard/wizard-demo.component';
import {
  XEditableDemoComponent,
} from './x-editable/x-editable-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    ControlDemoComponent,
    WizardDemoComponent,
    XEditableDemoComponent,
  ],
})
export class FormModule {
}