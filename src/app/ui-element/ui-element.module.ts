import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ButtonDemoComponent } from './button/button-demo.component';
import { DropdownDemoComponent } from './dropdown/dropdown-demo.component';
import { KnobDemoComponent } from './knob/knob-demo-component';
import {
  MessengerDemoComponent,
} from './messenger/messenger-demo.component';
import { ModalDemoComponent } from './modal/modal-demo.component';
import { SliderDemoComponent } from './slider/slider-demo.component';
import { TabDemoComponent } from './tab/tab-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    ButtonDemoComponent,
    DropdownDemoComponent,
    TabDemoComponent,
    SliderDemoComponent,
    KnobDemoComponent,
    ModalDemoComponent,
    MessengerDemoComponent,
  ],
})
export class UIElementModule {
}
