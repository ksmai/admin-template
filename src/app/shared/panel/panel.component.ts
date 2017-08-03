import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';

/**
 * PanelComponent
 * A box for holding DOM elements
 * Contains optional header and/or footer
 * Inputs:
 *   - showHeader: default to false
 *   - showFooter: default to false
 *   - showBody: default to true
 *   - showControls: default to true
 *   - headerColor: default to #79b0ec
 *   - footerColor: default to #79b0ec
 *   - tabbed: whether body contains a TabComponent, default to false
 *
 * @example
 * // basic panel
 * <admin-panel><p>Hello world!</p></admin-panel>
 *
 * @example
 * // panel with header and footer
 * <admin-panel [showHeader]="true" [showFooter]="true">
 *   <header>My Header</header>
 *   <div>some content</div>
 *   <p>some paragraphs</p>
 *   <footer>My Footer</footer>
 * </admin-panel>
 *
 * @example
 * // changing color of header/footer (defaults to blue)
 * // pass in any valid css colors
 * <admin-panel [showHeader]="true" headerColor="#666">
 *   <header>My Header</header>
 * </admin-panel>
 * <admin-panel [showFooter]="true" footerColor="rgb(12, 34, 56)">
 *   <footer>My Footer</footer>
 * </admin-panel>
 */
@Component({
  selector: 'admin-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnChanges, AfterViewInit {
  @Input() showHeader = false;
  @Input() showFooter = false;
  @Input() showControls = true;
  @Input() showBody = true;
  @Input() headerColor = '#79b0ec';
  @Input() footerColor = '#79b0ec';
  @HostBinding('class.tabbed') @Input() tabbed: boolean = false;
  @ViewChild('header') headerEl: any;
  @ViewChild('footer') footerEl: any;

  @HostBinding('class.minimized') isMinimized = false;
  @HostBinding('class.closed') isClosed = false;

  ngOnChanges(): void {
    this.updateColors();
  }

  ngAfterViewInit(): void {
    this.updateColors();
  }

  toggleMinimized(): void {
    this.isMinimized = !this.isMinimized;
  }

  toggleClosed(): void {
    this.isClosed = !this.isClosed;
  }

  refresh(): void {
    // TODO: figure out what does this do
  }

  private updateColors(): void {
    if (this.headerEl) {
      this.headerEl.nativeElement.style.backgroundColor = this.headerColor;
    }

    if (this.footerEl) {
      this.footerEl.nativeElement.style.backgroundColor = this.footerColor;
    }
  }
}
