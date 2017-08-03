import { Component } from '@angular/core';

import { VexDialogService } from '../../core/vex-dialog.service';

interface IPlan {
  name: string;
  price: number;
  domain: number;
  cpu: number;
  ram: number;
  bandwidth: number;
  storage: number;
}

/**
 * A component for showing the pricing tables as described by
 * the instance variable "plans"
 */
@Component({
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  current: number;
  defaultHeaderColor = 'rgb(236, 188, 208)';
  defaultButtonColor = 'lightpink';
  currentHeaderColor = 'rgb(215 ,31 ,75)';
  currentButtonColor = 'deepred';

  plans: IPlan[] = [{
    name: 'Starter',
    price: 9.99,
    domain: 1,
    cpu: 0.5,
    ram: 1,
    bandwidth: 10,
    storage: 10,
  }, {
    name: 'Basic',
    price: 19.99,
    domain: 2,
    cpu: 1,
    ram: 2,
    bandwidth: 20,
    storage: 20,
  }, {
    name: 'Pro',
    price: 29.99,
    domain: 3,
    cpu: 1.5,
    ram: 3,
    bandwidth: 30,
    storage: 30,
  }, {
    name: 'Ultra',
    price: 39.99,
    domain: 4,
    cpu: 2,
    ram: 4,
    bandwidth: 40,
    storage: 40,
  }];

  constructor(private vexDialogService: VexDialogService) {
  }

  onMouseEnter(i: number): void {
    this.current = i;
  }

  onMouseLeave(i: number): void {
    this.current = null;
  }

  onChoose(i: number): void {
    this.vexDialogService
      .alert(`Thanks for choosing the ${this.plans[i].name} plan!`);
  }

  isSelected(i: number): boolean {
    return i === this.current;
  }
}
