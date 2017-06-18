import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

/**
 * A component wrapping around Bootstrap pager
 * - Inputs:
 *   - prev: label of previous button, default to "Previous"
 *   - next: label of next button, default to "Next"
 *   - aligned: default to false
 *   - prevDisabled: default to false
 *   - nextDisabled: default to false
 *   - color: default to "green"
 *
 * - Output events:
 *   - page: -1 for previous, +1 for next
 *
 * @example
 * <admin-pager [aligned]="true" [prevDisabled]="true"></admin-pager>
 */
@Component({
  selector: 'admin-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnChanges, OnInit {
  @Input() prev: string = 'Previous';
  @Input() next: string = 'Next';
  @Input() aligned: boolean = false;
  @Input() prevDisabled: boolean = false;
  @Input() nextDisabled: boolean = false;
  @Input() color = 'green';
  @Output() page = new EventEmitter<number>();
  classes: { [key: string]: boolean };

  ngOnChanges(): void {
    this.classes = {
      pager: true,
    };
    this.classes[`pager--${this.color}`] = true;
  }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  onClick(n: number): boolean {
    this.page.emit(n);

    return false;
  }
}
