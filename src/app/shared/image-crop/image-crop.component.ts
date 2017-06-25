import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-jcrop/css/jquery.Jcrop.css';
import 'jquery-jcrop/js/jquery.Jcrop.js';

/**
 * A component wrapping around jquery-jcrop
 * Inputs:
 *   - src: source url of the image
 *   - aspectRatio: optional number, fixed aspect ratio of selection area
 *   - setSelect: optional [x,y,x2,y2], programmatically set selection
 *   - bgColor: background color of selection, default to 'black'
 *   - bgOpacity: opacity of bgColor, default to 0.6
 *   - bgFade: enable animation of bgColor/bgOpacity, default to true
 *
 * Output:
 *   - change: emits an object after each selection with properties:
 *     - w: width of selection area
 *     - h: height of selection area
 *     - x: offset of the left of selection area to the left edge
 *     - y: offset of the top of selection area to the top edge
 *     - x2: offset of the right of selection area to the left edge
 *     - y2: offset of the bottom of selection area to the top edge
 *     - displayWidth: width of the image displayed in the page (scaled)
 *     - displayHeight: height of the image displayed in the page (scaled)
 *
 * @example
 * <admin-image-crop
 *  [src]="src"
 *  [setSelect]="selection"
 *  [bgColor]="bgColor"
 *  [bgOpacity]="bgOpacity"
 * ></admin-image-crop>
 */
@Component({
  selector: 'admin-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss'],
})
export class ImageCropComponent implements AfterViewInit, OnChanges {
  @Input() src: string;
  @Input() aspectRatio: number;
  @Input() setSelect: [number, number, number, number];
  @Input() bgColor: string = 'black';
  @Input() bgOpacity: number = 0.6;
  @HostBinding('class.fade') @Input() bgFade: boolean = true;
  @Output() change = new EventEmitter<any>();
  @ViewChild('img') private imgEl: any;
  private jCrop: any;

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

    setTimeout(() => {
      const self = this;
      ($(this.imgEl.nativeElement) as any).Jcrop(options, function() {
        self.jCrop = this;
      });
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.jCrop) {
      return;
    }

    if (changes.setSelect) {
      const setSelect = changes.setSelect.currentValue;
      this.jCrop.animateTo(setSelect);
      if (setSelect[0] === setSelect[2] || setSelect[1] === setSelect[3]) {
        setTimeout(() => this.jCrop.release(), 500);
      }
    } else {
      const options = {};
      for (const key in changes) {
        if (changes.hasOwnProperty(key)) {
          options[key] = changes[key].currentValue;
        }
      }
      ($(this.imgEl.nativeElement) as any).Jcrop(options);
    }
  }

  private onChange(c: any): void {
    c.displayWidth = parseInt(this.imgEl.nativeElement.style.width, 10);
    c.displayHeight = parseInt(this.imgEl.nativeElement.style.height, 10);
    this.change.emit(c);
  }
}
