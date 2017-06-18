import { Component, Input, OnChanges } from '@angular/core';

interface ILink {
  href?: string;
  label: string;
}

/**
 * A component wrapper around Bootstrap breadcrumb
 * @example
 * <admin-breadcrumb color="red" [links]="[
 *  { label: 'Home', href: '#' },
 *  { label: 'Library', href: '#' },
 *  { label: 'Data' }
 * ]"></admin-breadcrumb>
 */
@Component({
  selector: 'admin-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnChanges {
  @Input() links: ILink[];
  @Input() color: string;
  classes: { [key: string]: boolean };

  ngOnChanges(): void {
    this.classes = {
      breadcrumb: true,
    };
    if (this.color) {
      this.classes[`breadcrumb--${this.color}`] = true;
    }
  }
}
