import { Component } from '@angular/core';

@Component({
  templateUrl: './static-timeline-demo.component.html',
  styleUrls: ['./static-timeline-demo.component.scss'],
})
export class StaticTimelineDemoComponent {
  timelines = [
    {
      full: true,
      block: true,
      events: [
        {
          date: 'Fri Jun 16 2017',
          time: '6:01 pm',
          texts: ['Working on StaticTimelineComponent'],
        },
        {
          date: 'Fri Jun 15 2017',
          time: '6:01 pm',
          texts: [
            'Working on InteractiveTimelineComponent',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    {
      full: true,
      events: [
        {
          date: 'Fri Jun 16 2017',
          time: '6:01 pm',
          texts: ['Working on StaticTimelineComponent'],
        },
        {
          date: 'Fri Jun 15 2017',
          time: '6:01 pm',
          texts: [
            'Working on InteractiveTimelineComponent',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    {
      events: [
        {
          date: 'Fri Jun 16 2017',
          time: '18:01',
          texts: ['Working on StaticTimelineComponent'],
        },
        {
          date: 'Fri Jun 15 2017',
          time: '18:01',
          texts: [
            'Working on InteractiveTimelineComponent',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    {
      block: true,
      events: [
        {
          date: 'Fri Jun 16 2017',
          time: '18:01',
          texts: ['Working on StaticTimelineComponent'],
        },
        {
          date: 'Fri Jun 15 2017',
          time: '18:01',
          texts: [
            'Working on InteractiveTimelineComponent',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
  ];
}
