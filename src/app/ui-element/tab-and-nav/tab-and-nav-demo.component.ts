import { Component } from '@angular/core';

/**
 * Demonstrate the usage of various components for tabs and navs:
 * {@link AccordionComponent},
 * {@link TabComponent},
 * {@link NavbarComponent},
 * {@link BreadcrumbComponent},
 * {@link PaginationComponent},
 * {@link PagerComponent}
 */
@Component({
  templateUrl: './tab-and-nav-demo.component.html',
  styleUrls: ['./tab-and-nav-demo.component.scss'],
})
export class TabAndNavDemoComponent {
  accordionItems = [
    { header: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { header: 'Ut enim ad minim veniam', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { header: 'Duis aute irure dolor', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
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

  navLeftLinks = [
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

  navRightLinks = [
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

  navLeftHTML = 'Signed in as <a href="#" class="navbar-link">Mark Otto</a>';
  navRightHTML = 'Good morning';

  links = [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data' },
  ];
}
