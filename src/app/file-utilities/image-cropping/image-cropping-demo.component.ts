import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './image-cropping-demo.component.html',
  styleUrls: ['./image-cropping-demo.component.scss'],
})
export class ImageCroppingDemoComponent {
  desk = require('../../../../assets/demo/desk.jpeg');
  grass = require('../../../../assets/demo/grass.jpeg');
  bird = require('../../../../assets/demo/bird.jpeg');
  grassCoord: any;
  deskSelection = [30, 30, 200, 200];
  grassSelection = [100, 100, 300, 300];
  @ViewChild('preview') previewEl: any;

  onGrassChange(c: any): void {
    this.grassCoord = c;
  }

  onBirdChange(c: any): void {
    this.previewEl.nativeElement.style.background =
      `url(${this.bird})`;
    this.previewEl.nativeElement.style.backgroundSize =
      `${200 * c.displayWidth / c.w}px ${200 * c.displayHeight / c.h}px`;
    this.previewEl.nativeElement.style.backgroundPosition =
      `left ${c.x * 100 / c.displayWidth}% top ${c.y * 100 / c.displayHeight}%`;
  }
}
