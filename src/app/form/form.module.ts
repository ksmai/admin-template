import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ControlDemoComponent } from './control/control-demo.component';
import { WizardDemoComponent } from './wizard/wizard-demo.component';
import {
  XEditableDemoComponent,
} from './x-editable/x-editable-demo.component';
import {
  DefaultFormDemoComponent,
} from './control/default-form/default-form-demo.component';
import {
  InputGroupDemoComponent,
} from './control/input-group/input-group-demo.component';
import {
  HorizontalFormDemoComponent,
} from './control/horizontal-form/horizontal-form-demo.component';
import {
  FormSizingDemoComponent,
} from './control/form-sizing/form-sizing-demo.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
  ],

  declarations: [
    ControlDemoComponent,
    WizardDemoComponent,
    XEditableDemoComponent,
    DefaultFormDemoComponent,
    InputGroupDemoComponent,
    HorizontalFormDemoComponent,
    FormSizingDemoComponent,
  ],
})
export class FormModule {
}
