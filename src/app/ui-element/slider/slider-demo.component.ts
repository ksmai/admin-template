import { Component } from '@angular/core';

@Component({
  templateUrl: './slider-demo.component.html',
  styleUrls: ['./slider-demo.component.scss'],
})
export class SliderDemoComponent {
  disabled = false;

  onCheck(): void {
    this.disabled = !this.disabled;
  }

  r = 128;
  g = 200;
  b = 128;

  get color(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
