import { Component } from '@angular/core';

/* tslint:disable:max-line-length */
/**
 * Demonstate the usage of {@link StaticTimelineComponent}
 */
@Component({
  templateUrl: './static-timeline-demo.component.html',
  styleUrls: ['./static-timeline-demo.component.scss'],
})
export class StaticTimelineDemoComponent {
  events = [
    {
      date: 'Fri Jun 16 2017',
      time: '6:01 pm',
      texts: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'],
    },
    {
      date: 'Fri Jun 15 2017',
      time: '6:01 pm',
      texts: [
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      ],
    },
  ];
}
