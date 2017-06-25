import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import $ = require('jquery');
import 'fullcalendar/dist/fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/draggable';

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
 *   - external: place event into an external draggable list, default false
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
export class CalendarComponent implements AfterViewInit {
  @Input() events: IEvent[] = [];
  @Input() defaultDate: string;
  @Input() external: boolean = false;

  removeAfterDrop = false;
  @ViewChild('calendar') private calendarEl: any;

  ngAfterViewInit(): void {
    setTimeout(() => this.init(), 0);
  }

  private init(): void {
    const options = {
      defaultDate: this.defaultDate,
      editable: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay',
      },
    };
    if (this.external) {
      const calendarEl = this.calendarEl.nativeElement;
      const that = this;
      Object.assign(options, {
        droppable: true,
        drop(date: any) {
          const originalEventObject = ($(this) as any).data('eventObject');
          const copiedEventObject = Object.assign({}, originalEventObject);
          copiedEventObject.start = date;
          ($(calendarEl) as any).fullCalendar(
            'renderEvent',
            copiedEventObject,
            true,
          );
          if (that.removeAfterDrop) {
            ($(this) as any).remove();
          }
        },
      });

      ($(this.calendarEl.nativeElement) as any)
        .parent()
        .find('.external-event')
        .each(function() {
          const eventObject = {
            title: ($(this) as any).text(),
          };
          ($(this) as any).data('eventObject', eventObject);
          ($(this) as any).draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0,
          });
        });
    } else {
      Object.assign(options, {
        events: this.events,
      });
    }
    ($(this.calendarEl.nativeElement) as any).fullCalendar(options);
  }
}
