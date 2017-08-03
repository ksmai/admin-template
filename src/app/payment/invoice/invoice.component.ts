import { Component } from '@angular/core';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';

import { MessengerService } from '../../core/messenger.service';

export interface IInvoiceItem {
  description: string;
  quantity: number;
  unit: string;
  price: number;
}

/**
 * Display an invoice
 */
@Component({
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent {
  items: IInvoiceItem[] = [{
    description: 'Upgrade system to v16.0.7',
    quantity: 5,
    unit: 'hours',
    price: 100,
  }, {
    description: 'Deploy website',
    quantity: 3,
    unit: 'hours',
    price: 120,
  }];

  constructor(private messengerService: MessengerService) {
  }

  get total(): number {
    return this.items.reduce((sum, item) =>
      sum + item.quantity * item.price, 0);
  }

  onPrint(): void {
    this.messengerService.notification(
      'Printing...',
      'Sorry, not enough credits for this operation',
      Observable.timer(1000),
      'invoice-printer',
    );
  }
}
