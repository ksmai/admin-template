import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() striped: boolean = false;
  @Input() bordered: boolean = false;
  @Input() hover: boolean = false;
  @Input() condensed: boolean = false;
  @Input() responsive = false;
  classes: { [key: string]: boolean };

  ngOnInit(): void {
    this.classes = {
      'table': true,
      'table-striped': this.striped,
      'table-bordered': this.bordered,
      'table-hover': this.hover,
      'table-condensed': this.condensed,
    };
  }
}
