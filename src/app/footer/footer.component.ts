import { Component } from '@angular/core';

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  url = 'https://github.com/ksmai/admin-template';
  author = 'ksmai';
  year = (new Date()).getFullYear();
  version = 'v1.0.0';
}
