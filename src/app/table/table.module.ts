import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  BootstrapTableDemoComponent,
} from './bootstrap-table/bootstrap-table-demo.component';
import {
  DatatableDemoComponent,
} from './datatable/datatable-demo.component';
import { TablesawDemoComponent } from './tablesaw/tablesaw-demo.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    BootstrapTableDemoComponent,
    DatatableDemoComponent,
    TablesawDemoComponent,
  ],
})
export class TableModule {
}
