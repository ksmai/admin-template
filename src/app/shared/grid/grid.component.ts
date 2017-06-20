import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';

/**
 * A simple component wrapping around bootstrap grid system
 * @example
 * <admin-grid [cols]="[4, 4, 4]">
 *   <ng-template>Four</ng-template>
 *   <ng-template>Four</ng-template>
 *   <ng-template>Four</ng-template>
 * </admin-grid>
 */
@Component({
  selector: 'admin-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @ContentChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;
  @Input() cols: string|number[] = [];
}
