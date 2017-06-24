import { Component } from '@angular/core';

/**
 * Demonstrate the usage of DropdownComponent
 */
@Component({
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss'],
})
export class DropdownDemoComponent {
  options = [
    { option: 'Action' },
    { option: 'Another action' },
    { option: 'Yet another action' },
    { isHeader: true },
    { option: 'Disabled link', disabled: true },
    { option: 'Separated link' },
  ];
  optionsWithHeaders = [
    { option: 'DROPDOWN HEADER', isHeader: true },
    { option: 'Action' },
    { option: 'Another action' },
    { option: 'Yet another action' },
    { option: 'DROPDOWN HEADER', isHeader: true },
    { option: 'Disabled link', disabled: true },
    { option: 'Separated link' },
  ];
}
