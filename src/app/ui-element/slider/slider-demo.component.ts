import { Component } from '@angular/core';

@Component({
  templateUrl: './slider-demo.component.html',
  styleUrls: ['./slider-demo.component.scss'],
})
export class SliderDemoComponent {
  disabled = false;
  r = 128;
  g = 200;
  b = 128;
  payload: any;

  onCheck(): void {
    this.disabled = !this.disabled;
  }

  get color(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  onChange(payload: any) {
    this.payload = payload;
  }
}
