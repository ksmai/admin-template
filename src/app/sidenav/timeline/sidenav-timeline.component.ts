import { Component } from '@angular/core';

import {
  IEvent,
} from '../../shared/static-timeline/static-timeline.component';

/**
 * Render the timeline tab inside sidenav
 */
@Component({
  selector: 'admin-sidenav-timeline',
  templateUrl: './sidenav-timeline.component.html',
  styleUrls: ['./sidenav-timeline.component.scss'],
})
export class SidenavTimelineComponent {
  events: IEvent[] = [{
    date: '11 Aug 2017',
    templates: [0],
    hasAvatar: [true],
  }, {
    date: '10 Aug 2017',
    templates: [1, 2],
    hasAvatar: [true, true],
  }, {
    date: '9 Aug 2017',
    templates: [3],
    hasAvatar: [true],
  }];
}
