import { Component } from '@angular/core';

@Component({
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.scss'],
})
export class CalendarDemoComponent {
  events = [
    {
      title: 'Event 1',
      start: '2046-11-01',
      allDay: true,
    },
    {
      title: 'Long event',
      start: '2046-11-07',
      end: '2046-11-10',
    },
    {
      title: 'Repeating event',
      start: '16:00',
      end: '17:00',
      dow: [6],
    },
    {
      title: 'Conference',
      start: '2046-11-11',
      end: '2046-11-13',
    },
    {
      title: 'Meeting',
      start: '2046-11-12 10:30',
      end: '2046-11-12 11:30',
    },
    {
      title: 'Lunch',
      start: '2046-11-12 12:00',
      end: '2046-11-12 13:30',
    },
    {
      title: 'Meeting',
      start: '2046-11-12 14:30',
      end: '2046-11-12 16:30',
    },
    {
      title: 'Dinner',
      start: '2046-11-12 17:30',
      end: '2046-11-12 20:30',
    },
    {
      title: 'Sleeping',
      start: '2046-11-12 21:30',
      end: '2046-11-13 11:30',
    },
    {
      title: 'Click for rubix',
      start: '2046-11-14',
      url: 'http://rubix410.sketchpixy.com/',
    },
  ];
}
