import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');

import 'dropzone/dist/basic.css';
import Dropzone = require('dropzone');
import 'dropzone/dist/dropzone.css';
Dropzone.autoDiscover = false;

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
export class DropzoneComponent implements AfterViewInit, OnDestroy {
  @Input() url: string = '#';
  @ViewChild('div') private divEl: any;

  ngOnDestroy(): void {
    (Dropzone as any).forElement(this.divEl.nativeElement).destroy();
  }

  ngAfterViewInit(): void {
    ($(this.divEl.nativeElement) as any).dropzone({
      url: this.url,
    });
  }
}
