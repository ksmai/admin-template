import { Routes } from '@angular/router';

import {
  BootstrapTableDemoComponent,
} from './bootstrap-table/bootstrap-table-demo.component';
import {
  DatatableDemoComponent,
} from './datatable/datatable-demo.component';
import { TablesawDemoComponent } from './tablesaw/tablesaw-demo.component';

export const tableRoutes: Routes = [
  {
    path: 'tables',
    children: [
      { path: 'bootstrap-tables', component: BootstrapTableDemoComponent },
      { path: 'datatables', component: DatatableDemoComponent },
      { path: 'tablesaw', component: TablesawDemoComponent },
      { path: '**', redirectTo: 'bootstrap-tables' },
    ],
  },
];
