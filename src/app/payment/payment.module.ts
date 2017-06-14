import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    InvoiceComponent,
    PricingComponent,
  ],
})
export class PaymentModule {
}
