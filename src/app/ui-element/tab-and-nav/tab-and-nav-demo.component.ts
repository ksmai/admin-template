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

  tabs = [
    { name: 'tab #1', content: 'Content in tab #1' },
    { name: 'tab #2', content: 'Content in tab #2' },
    {
      name: 'dropdown',
      isDropdown: true,
      tabs: [
        { name: 'dropdown #1', content: 'Content in dropdown #1' },
        { name: 'dropdown #2', content: 'Content in dropdown #2' },
      ],
    },
  ];

  leftLinks = [
    { label: 'Link 1', href: '#', active: true },
    { label: 'Link 2', href: '#' },
    {
      label: 'Dropdown',
      children: [
        { label: 'Action', href: '#', active: true },
        { label: 'Another action', href: '#' },
        { label: 'Something else here', href: '#' },
        { label: '' },
        { label: 'Separated link', href: '#' },
      ],
    },
  ];

  rightLinks = [
    { label: 'Link 3', href: '#' },
    {
      label: 'Dropdown',
      children: [
        { label: 'Action', href: '#', active: true },
        { label: 'Another action', href: '#' },
        { label: 'Something else here', href: '#' },
        { label: '' },
        { label: 'Separated link', href: '#' },
      ],
    },
  ];

  leftHTML = 'Signed in as <a href="#" class="navbar-link">Mark Otto</a>';
  rightHTML = 'Good morning';

  links = [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data' },
  ];
}
