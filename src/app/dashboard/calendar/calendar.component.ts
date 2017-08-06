import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
 } from '@angular/core';
import $ = require('jquery');

import 'eonasdan-bootstrap-datetimepicker';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

/**
 * Renders the calendar inside dashboard
 */
@Component({
  selector: 'admin-dashboard-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class DashboardCalendarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('picker') pickerEl: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => this.initPicker(), 0);
  }

  ngOnDestroy() {
    ($(this.pickerEl.nativeElement) as any)
      .data('DateTimePicker')
      .destroy();
  }

  private initPicker(): void {
    ($(this.pickerEl.nativeElement) as any).datetimepicker({
      inline: true,
    });
    ($(this.pickerEl.nativeElement) as any)
      .data('DateTimePicker')
      .hide();
    ($(this.pickerEl.nativeElement) as any)
      .data('DateTimePicker')
      .show();
  }
}
