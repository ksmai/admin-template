import { Component, Input, OnChanges } from '@angular/core';
import 'bootstrap/js/collapse';

interface ILink {
  label: string;
  href?: string;
  children?: ILink[];
  active?: boolean;
}

/**
 * A simple wrapper around Bootstrap navbar
 * Inputs:
 *   - brand: string
 *   - leftLinks, rightLinks: Array of Link objects to be placed on
 *     the left/right respectively, with properties as follow:
 *       - label: string
 *       - href: string
 *       - active: default to false
 *       - children: if present, this item becomes the toggle of a
 *                   dropdown menu and its href is ignored. It should
 *                   contain an array of Link objects, except that the
 *                   objects cannot have children again. A child without
 *                   label becomes a seperator in the dropdown menu
 *   - leftHTML, rightHTML: HTML strings to be displayed in the left/
 *                          right of navbar respectively
 *   - inverse: a flag to use dark mode
 *
 * @exmaple
 * <admin-navbar
 *   brand="Brand"
 *   [leftLinks]="leftLinks"
 *   [rightLinks]="rightLinks"
 *   [inverse]="true"
 * ></admin-navbar>
 */
@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnChanges {
  @Input() brand: string;
  @Input() leftLinks: ILink[] = [];
  @Input() rightLinks: ILink[] = [];
  @Input() leftHTML: string;
  @Input() rightHTML: string;
  @Input() inverse: boolean = false;
  id: string;

  ngOnChanges(): void {
    this.id = this.randomID();
  }

  private randomID(): string {
    return `id-${Date.now()}-${Math.random().toString().slice(2)}`;
  }
}
