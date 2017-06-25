import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Demonstrate the usage of {@link KnobComponent}
 */
@Component({
  templateUrl: './knob-demo-component.html',
  styleUrls: ['./knob-demo-component.scss'],
})
export class KnobDemoComponent implements OnInit, OnDestroy {
  hour: number;
  minute: number;
  second: number;
  private intervalID: any;

  ngOnInit(): void {
    this.getCurrentTime();
    this.intervalID = setInterval(() => this.getCurrentTime(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }

  private getCurrentTime(): void {
    const now = new Date();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
  }
}
