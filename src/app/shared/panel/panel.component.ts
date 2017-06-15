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
  @Input() headerColor = '#79b0ec';
  @Input() footerColor = '#79b0ec';
  @ViewChild('header') headerEl: any;
  @ViewChild('footer') footerEl: any;

  @HostBinding('class.minimized') private isMinimized = false;
  @HostBinding('class.closed') private isClosed = false;

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

  private updateColors(): void {
    if (this.headerEl) {
      this.headerEl.nativeElement.style.backgroundColor = this.headerColor;
    }

    if (this.footerEl) {
      this.footerEl.nativeElement.style.backgroundColor = this.footerColor;
    }
  }
}
