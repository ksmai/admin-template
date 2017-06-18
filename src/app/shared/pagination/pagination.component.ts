import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

/**
 * Based on Bootstrap pagination, with additional truncation and colors
 * Inputs:
 *   - start: first page number, default to 1
 *   - end: last page number (greater than start)
 *   - current: current page number, default to start
 *   - color: optional string
 *   - size: optional, "lg" | "sm"
 *
 * Outputs:
 *   - page: the page number navigated to
 *
 * @exmaple
 * <admin-pagination [start]="1" [end]="10" color="red"></admin-pagination>
 */
@Component({
  selector: 'admin-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() start: number = 1;
  @Input() end: number;
  @Input() current: number;
  @Input() color: string;
  @Input() size: string;
  @Output() page = new EventEmitter<number>();
  pages: number[];
  classes: { [key: string]: boolean };
  truncated: number[];

  ngOnChanges(): void {
    this.pages = Array(this.end - this.start + 1)
      .fill(undefined)
      .map((e, i) => this.start + i);

    if (!this.current) {
      this.current = this.start;
    }
    this.truncate();

    this.classes = {
      'pagination': true,
      'pagination-lg': this.size === 'lg',
      'pagination-sm': this.size === 'sm',
    };
    if (this.color) {
      this.classes[`pagination--${this.color}`] = true;
    }
  }

  navTo(page: number): void {
    if (page < this.start || page > this.end) {
      return;
    }

    this.current = page;
    this.page.emit(page);
    this.truncate();
  }

  private truncate(): void {
    if (this.end - this.start < 6) {
      this.truncated = this.pages.slice();
    } else if (this.current - this.start < 3) {
      this.truncated = this.pages.slice(0, 4);
      this.truncated.push(null);
      this.truncated.push(this.end);
    } else if (this.end - this.current < 2) {
      this.truncated = this.pages.slice(-4);
      this.truncated.unshift(null);
      this.truncated.unshift(this.start);
    } else {
      this.truncated = [
        this.start,
        null,
        this.current - 2,
        this.current - 1,
        this.current,
        this.current + 1,
        null,
        this.end,
      ];
    }
  }
}
