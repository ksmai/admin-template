import { Component } from '@angular/core';

@Component({
  templateUrl: './tab-and-nav-demo.component.html',
  styleUrls: ['./tab-and-nav-demo.component.scss'],
})
export class TabAndNavDemoComponent {
  items = [
    { header: 'item #1', content: 'some content' },
    { header: 'item #2', content: 'some more content' },
    { header: 'item #3', content: 'some more and more and more content' },
  ];
}
