import { Component, Input, OnChanges } from '@angular/core';
import 'bootstrap/js/collapse';
import 'bootstrap/js/transition';

interface IItem {
  header: string;
  content: string;
}

/**
 * An accordion built on top of Bootstrap Accordion
 * @exmaple
 * <admin-accordion [items]="[
 *   { header: 'item #1', content: 'some content' },
 *   { header: 'item #2', content: 'some content' },
 *   { header: 'item #3', content: 'some content' }
 * ]"></admin-accordion>
 */
@Component({
  selector: 'admin-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnChanges {
  @Input() items: IItem[] = [];
  ids: string[];
  parentID: string;

  ngOnChanges(): void {
    this.ids = this.items.map(() => this.randomID());
    this.parentID = this.randomID();
  }

  private randomID(): string {
    return `id-${Date.now()}-${Math.random().toString().slice(2)}`;
  }
}
