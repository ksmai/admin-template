import { Component, Input, OnChanges } from '@angular/core';
import $ = require('jquery');

import 'bootstrap/js/tab';

@Component({
  selector: 'admin-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnChanges {
  @Input() color: string;
  classes: { [key: string]: boolean };

  ngOnChanges() {
    this.classes = {
      [`sidenav sidenav--${this.color}`]: true,
    };
  }
}
