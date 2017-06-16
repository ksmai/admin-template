import { Component, OnInit, Input } from '@angular/core';
import randomColor = require('randomcolor');

interface IEvent {
  date: string;
  time?: string;
  texts: string[];
}

type Luminosity = 'bright'|'dark'|'light'|'random';

@Component({
  selector: 'admin-static-timeline',
  templateUrl: './static-timeline.component.html',
  styleUrls: ['./static-timeline.component.scss'],
})
export class StaticTimelineComponent implements OnInit {
  @Input() events: IEvent[];
  @Input() luminosity: Luminosity = 'bright';
  @Input() block: boolean;
  colors: string[];

  ngOnInit(): void {
    this.colors = randomColor({
      count: this.events.length,
      luminosity: this.luminosity,
    } as any) as any as string[];
  }
}
