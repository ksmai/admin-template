import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccordionComponent } from './accordion/accordion.component';
import {
  BootstrapSliderComponent,
} from './bootstrap-slider/bootstrap-slider.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { C3JSChartComponent } from './c3js-chart/c3js-chart.component';
import { CalenderComponent } from './calender/calender.component';
import {
  ChartJSChartComponent,
} from './chartjs-chart/chartjs-chart.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { EditorComponent } from './editor/editor.component';
import { FontComponent } from './font/font.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormXEditableComponent } from './form-x-editable/form-x-editable.component';
import { GridComponent } from './grid/grid.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { InteractiveTimelineComponent } from './interactive-timeline/interactive-timeline.component';
import { IonSliderComponent } from './ion-slider/ion-slider.component';
import { KnobComponent } from './knob/knob.component';
import { MapComponent } from './map/map.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ModalComponent } from './modal/modal.component';
import {
  MorrisJSChartComponent,
} from './morrisjs-chart/morrisjs-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagerComponent } from './pager/pager.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { StaticTimelineComponent } from './static-timeline/static-timeline.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],

  declarations: [
    AccordionComponent,
    BreadcrumbComponent,
    ButtonComponent,
    CalenderComponent,
    ChartJSChartComponent,
    CodemirrorComponent,
    DropdownComponent,
    DropzoneComponent,
    EditorComponent,
    FontComponent,
    FormControlComponent,
    FormWizardComponent,
    FormXEditableComponent,
    GridComponent,
    ImageCropComponent,
    InteractiveTimelineComponent,
    IonSliderComponent,
    KnobComponent,
    MapComponent,
    MessengerComponent,
    ModalComponent,
    NavbarComponent,
    PagerComponent,
    PaginationComponent,
    PanelComponent,
    BootstrapSliderComponent,
    StaticTimelineComponent,
    TabComponent,
    TableComponent,
    C3JSChartComponent,
    MorrisJSChartComponent,
  ],

  exports: [
    CommonModule,
    AccordionComponent,
    BreadcrumbComponent,
    ButtonComponent,
    CalenderComponent,
    ChartJSChartComponent,
    CodemirrorComponent,
    DropdownComponent,
    DropzoneComponent,
    EditorComponent,
    FontComponent,
    FormControlComponent,
    FormWizardComponent,
    FormXEditableComponent,
    GridComponent,
    ImageCropComponent,
    InteractiveTimelineComponent,
    IonSliderComponent,
    KnobComponent,
    MapComponent,
    MessengerComponent,
    ModalComponent,
    NavbarComponent,
    PagerComponent,
    PaginationComponent,
    PanelComponent,
    BootstrapSliderComponent,
    StaticTimelineComponent,
    TabComponent,
    TableComponent,
    C3JSChartComponent,
    MorrisJSChartComponent,
  ],
})
export class SharedModule {
}
