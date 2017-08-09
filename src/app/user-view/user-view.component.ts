import { Component, HostBinding } from '@angular/core';

@Component({
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent {
  @HostBinding('class.always-show-sidenav') alwaysShowSidenav = false;
  navColor = 'pinkishred';
}
