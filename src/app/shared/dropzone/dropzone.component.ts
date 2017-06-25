import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import $ = require('jquery');

import 'dropzone/dist/basic.css';
import 'dropzone/dist/dropzone';
import 'dropzone/dist/dropzone.css';

/**
 * A component wrapping around Dropzone.js
 * @example
 * <admin-dropzone url="/upload"></admin-dropzone>
 */
@Component({
  selector: 'admin-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent implements AfterViewInit {
  @Input() url: string = '#';
  @ViewChild('div') private divEl: any;

  ngAfterViewInit(): void {
    ($(this.divEl.nativeElement) as any).dropzone({
      url: this.url,
    });
  }
}
