import { Component, Input } from '@angular/core';
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
export class DropzoneComponent {
  @Input() url: string = '#';
}
