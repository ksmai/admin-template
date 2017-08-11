import { Component } from '@angular/core';

import {
  IEvent,
} from '../../shared/static-timeline/static-timeline.component';

const birdImage = require('../../../../assets/demo/bird.jpeg');
const grassImage = require('../../../../assets/demo/grass.jpeg');
const nyanCat = require('../../../../assets/demo/Nyan_cat_250px_frame.jpg');

/**
 * Render the timeline tab inside sidenav
 */
@Component({
  selector: 'admin-sidenav-timeline',
  templateUrl: './sidenav-timeline.component.html',
  styleUrls: ['./sidenav-timeline.component.scss'],
})
export class SidenavTimelineComponent {
  birdImage = birdImage;
  grassImage = grassImage;
  nyanCat = nyanCat;
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

  colors = [
    'rgb(234, 133, 100)',
    'rgb(127, 136, 236)',
    'rgb(85, 201, 166)',
  ];
}
