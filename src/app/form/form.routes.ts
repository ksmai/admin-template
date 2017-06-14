import { Routes } from '@angular/router';

import { ControlDemoComponent } from './control/control-demo.component';
import { WizardDemoComponent } from './wizard/wizard-demo.component';
import {
  XEditableDemoComponent,
} from './x-editable/x-editable-demo.component';

export const formRoutes: Routes = [
  {
    path: 'forms',
    children: [
      { path: 'controls', component: ControlDemoComponent },
      { path: 'x-editable', component: XEditableDemoComponent },
      { path: 'wizard', component: WizardDemoComponent },
      { path: '**', redirectTo: 'controls' },
    ],
  },
];
