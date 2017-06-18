import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import 'bootstrap/js/tab';

interface IDropdownItem {
  name: string;
  content: string;
}

interface ITab {
  name: string;
  content?: string;
  isDropdown?: boolean;
  tabs?: IDropdownItem[];
}

/**
 * Built on top of Bootstrap tabs
 * Input:
 *   - tabs: Array of Tab Objects with the following properties
 *      - name: string, required, label on the tab
 *      - content: string, content to be displayed when tab is active
 *      - isDropdown: boolean, if true, content will be ignored
 *      - tabs: Array of DropdownItem with the following properties
 *          - name, content: string, same as Tab Objects
 *   - color: 60 available colors
 *   - pills: if true, display pills instead of tabs
 *   - stacked: if true and pills is also true, stack the pills vertically
 *   - justified: if true, justify the tabs/pills
 *
 * @example
 * <admin-tab [tabs]="tabs" color="red" [pills]="true"></admin-tab>
 */
@Component({
  selector: 'admin-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnChanges {
  @Input() tabs: ITab[] = [];
  @Input() color: string;
  @Input() pills: boolean = false;
  @Input() stacked: boolean = false;
  @Input() justified: boolean = false;
  classes: { [key: string]: boolean };
  ids: Array<string|string[]>;

  @HostBinding('class.landscape') landscape = false;

  ngOnChanges(): void {
    this.ids = this.tabs.map((tab) => {
      if (tab.isDropdown) {
        return tab.tabs.map(() => this.randomID());
      } else {
        return this.randomID();
      }
    });
    this.classes = {
      'nav-justified': this.justified && (!this.pills || !this.stacked),
    };
    if (this.color) {
      this.classes[`nav--${this.color.toLowerCase()}`] = true;
    }
    if (this.pills) {
      this.classes['nav-pills'] = true;
      if (this.stacked) {
        this.classes['nav-stacked'] = true;
        this.landscape = true;
      }
    } else {
      this.classes['nav-tabs'] = true;
    }
  }

  private randomID(): string {
    return `id-${Date.now()}-${Math.random().toString().slice(2)}`;
  }
}
