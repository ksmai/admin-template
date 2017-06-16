import {
  Component,
  ElementRef,
  Input,
  OnInit,
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

  private timeline: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.timeline = new TL.Timeline(this.el.nativeElement, this.data);
  }
}
