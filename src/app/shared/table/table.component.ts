import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-responsive';
import 'datatables.net-responsive-bs';
import 'datatables.net-responsive-bs/css/responsive.bootstrap.css';
import 'tablesaw/dist/tablesaw.css';
import 'tablesaw/dist/tablesaw.jquery.js';

// tablesaw-init.js checks for `'jQuery' in window` that cannot be
// fixed with ProvidePlugin
Object.assign(window, { jQuery: $ });
import 'tablesaw/dist/tablesaw-init.js';

/**
 * A component wrapping around bootstrap tables, datatables and tablesaw
 * Inputs:
 *   - striped, bordered, condensed, hover, responsive: bootstrap styling
 *     options, default to false
 *   - datatable: a flag for transforming into datatable, default to false
 *   - tablesaw: 'sortable' | 'stack' | 'swipe' | 'columntoggle', modes of
 *     tablesaw
 *   - tablesawSwitch: whether to allow user to switch tablesaw modes,
 *     default to false
 *
 * @example
 * <admin-table [bordered]="true" [condensed]="true">
 *   <thead><tr><th>#</th><th>Name</th></tr></thead>
 *   <tbody><tr><td>1</td><td>Mark</td></tr>
 *          <tr><td>2</td><td>Jane</td></tr>
 *          <tr><td>3</td><td>Pete</td></tr></tbody>
 * </admin-table>
 *
 * @example
 * <admin-table [hover]="true" [datatable]="true">
 *   <thead><tr><th>#</th><th>Name</th></tr></thead>
 *   <tbody><tr><td>1</td><td>Mark</td></tr>
 *          <tr><td>2</td><td>Jane</td></tr>
 *          <tr><td>3</td><td>Pete</td></tr></tbody>
 * </admin-table>
 *
 * @example
 * <admin-table [striped]="true" tablesaw="stack">
 *   <thead><tr><th>#</th><th>Name</th></tr></thead>
 *   <tbody><tr><td>1</td><td>Mark</td></tr>
 *          <tr><td>2</td><td>Jane</td></tr>
 *          <tr><td>3</td><td>Pete</td></tr></tbody>
 * </admin-table>
 */
@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy  {
  @Input() datatable: boolean = false;
  @Input() tablesaw: string = null;
  @Input() tablesawSwitch: boolean = false;
  @Input() striped: boolean = false;
  @Input() bordered: boolean = false;
  @Input() hover: boolean = false;
  @Input() condensed: boolean = false;
  @Input() responsive = false;
  classes: { [key: string]: boolean };

  @ViewChild('table') private tableEl: any;
  private datatableInstance: any;

  ngOnDestroy(): void {
    if (this.datatableInstance) {
      this.datatableInstance.destroy();
    }
  }

  ngOnInit(): void {
    this.classes = {
      'table': true,
      'table-striped': this.striped,
      'table-bordered': this.bordered,
      'table-hover': this.hover,
      'table-condensed': this.condensed,
      'tablesaw': this.tablesaw === 'stack',
      'tablesaw-stack': this.tablesaw === 'stack',
    };
  }

  ngAfterViewInit(): void {
    if (this.datatable) {
      setTimeout(() => {
        this.datatableInstance = ($(this.tableEl.nativeElement) as any)
          .DataTable({
            responsive: true,
          });
      }, 0);
    } else if (this.tablesaw) {
      setTimeout(() => {
        ($(document as any) as any).trigger('enhance.tablesaw');
      }, 0);
    }
  }
}
