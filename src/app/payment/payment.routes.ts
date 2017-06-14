import { Routes } from '@angular/router';

import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';

export const paymentRoutes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: 'pricing', component: PricingComponent },
];
