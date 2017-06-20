import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-jcrop/js/jquery.Jcrop.js';
import 'jquery-jcrop/css/jquery.Jcrop.css';

@Component({
  selector: 'admin-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss'],
})
export class ImageCropComponent implements AfterViewInit {
  @Input() src: string;
  @Input() aspectRatio: number;
  @Input() setSelect: [number, number, number, number];
  @Input() bgColor: string = 'black';
  @Input() bgOpacity: number = 0.6;
  @Output() change = new EventEmitter<any>();
  @ViewChild('img') private imgEl: any;

  ngAfterViewInit(): void {
    const options = {
      onChange: (c: any) => this.onChange(c),
      onSelect: (c: any) => this.onChange(c),
      bgColor: this.bgColor,
      bgOpacity: this.bgOpacity,
    };
    if (this.aspectRatio) {
      Object.assign(options, { aspectRatio: this.aspectRatio });
    }
    if (this.setSelect) {
      Object.assign(options, { setSelect: this.setSelect });
    }

    ($(this.imgEl.nativeElement) as any).Jcrop(options);
  }

  private onChange(c: any): void {
    c.displayWidth = parseInt(this.imgEl.nativeElement.style.width, 10);
    c.displayHeight = parseInt(this.imgEl.nativeElement.style.height, 10);
    c.imageWidth = this.imgEl.nativeElement.width;
    c.imageHeight = this.imgEl.nativeElement.height;
    this.change.emit(c);
  }
}
