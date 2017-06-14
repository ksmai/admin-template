import { Routes } from '@angular/router';

import { ButtonDemoComponent } from './button/button-demo.component';
import { DropdownDemoComponent } from './dropdown/dropdown-demo.component';
import { KnobDemoComponent } from './knob/knob-demo-component';
import {
  MessengerDemoComponent,
} from './messenger/messenger-demo.component';
import { ModalDemoComponent } from './modal/modal-demo.component';
import { SliderDemoComponent } from './slider/slider-demo.component';
import { TabDemoComponent } from './tab/tab-demo.component';

export const uiElementRoutes: Routes = [
  {
    path: 'ui-elements',
    children: [
      { path: 'buttons', component: ButtonDemoComponent },
      { path: 'dropdowns', component: DropdownDemoComponent },
      { path: 'tabs', component: TabDemoComponent },
      { path: 'sliders', component: SliderDemoComponent },
      { path: 'knobs', component: KnobDemoComponent },
      { path: 'modals', component: ModalDemoComponent },
      { path: 'messengers', component: MessengerDemoComponent },
      { path: '**', redirectTo: 'buttons' },
    ],
  },
];