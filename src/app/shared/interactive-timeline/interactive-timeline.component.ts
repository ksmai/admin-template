import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

// The timelinejs3 library is loaded from cdn and exposed as a global
// variable. See src/index.html for details
declare const TL: any;

/**
 * A wrapper around TimelineJS
 * For an example usage refer to InteractiveTimelineDemoComponent
 * For data format see https://timeline.knightlab.com/docs/json-format.html
 */
@Component({
  selector: 'admin-interactive-timeline',
  templateUrl: './interactive-timeline.component.html',
  styleUrls: ['./interactive-timeline.component.scss'],
})
export class InteractiveTimelineComponent implements OnInit {
  @Input() data: any;
  @Input() height: number;
  @ViewChild('timeline') private timelineEl: any;

  private timeline: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.height) {
      this.el.nativeElement.style.height = `${this.height}px`;
    }
    this.timeline = new TL.Timeline(
      this.timelineEl.nativeElement,
      this.data,
    );
  }
}
