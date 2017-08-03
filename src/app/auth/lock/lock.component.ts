import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Display a lock page where user can get back into
 * the app by providing the password
 */
@Component({
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss'],
})
export class LockComponent implements OnInit, OnDestroy {
  intervalID: any;
  hh: string;
  mm: string;
  ss: string;
  day: string;
  month: string;
  year: string;

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private locationService: Location) {
  }

  ngOnInit() {
    this.updateTime();
    this.intervalID = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

  onUnlock(): void {
    this.locationService.back();
  }

  private pad(s: string, digits = 2): string {
    let padded = s;
    while (padded.length < digits) {
      padded = `0${padded}`;
    }
    return padded;
  }

  private updateTime(): void {
    const date = new Date();
    this.hh = this.pad(date.getHours().toString());
    this.mm = this.pad(date.getMinutes().toString());
    this.ss = this.pad(date.getSeconds().toString());
    this.month = this.months[date.getMonth()];
    this.day = this.days[date.getDay()];
    this.year = date.getFullYear().toString();
  }
}
