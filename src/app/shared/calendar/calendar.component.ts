import { Component, ElementRef, Input, OnInit } from '@angular/core';
import $ = require('jquery');
import 'fullcalendar/dist/fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

interface IEvent {
  title: string;
  allDay?: boolean;
  start: string;
  end?: string;
  url?: string;
  dow?: number[];
}

/**
 * A component wrapping around FullCalendar
 * Inputs:
 *   - events: An array of Event objects to be displayed with the following
 *             properties:
 *     - title: required
 *     - allDay: optional, boolean
 *     - start: required, starting time of the event
 *     - end: optional, ending time of the event
 *     - url: optional, redirect url on click
 *     - dow: optional, array of numbers representing the days of week in
 *            which the event occurs
 *   - defaultDate: optional, the date to be displayed on init
 *
 * @example
 * <admin-calendar
 *   [events]="events"
 *   defaultDate="2046-11-01"
 * ></admin-calendar>
 */
@Component({
  selector: 'admin-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() events: IEvent[] = [];
  @Input() defaultDate: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    ($(this.el.nativeElement) as any).fullCalendar({
      events: this.events,
      defaultDate: this.defaultDate,
      editable: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay',
      },
    });
  }
}
