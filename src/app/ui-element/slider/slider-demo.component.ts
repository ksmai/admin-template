import { Component } from '@angular/core';
const Prism = require('prismjs/prism.js');
import 'prismjs/themes/prism-tomorrow.css';

/**
 * Demonstrate the usage of {@link BootstrapSliderComponent} and
 * {@link IonSliderComponent}
 */
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
  currentValue = 0;

  get color(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  onChange(payload: any) {
    this.payload = Prism.highlight(
      JSON.stringify(payload, null, 2),
      Prism.languages.javascript,
    );
  }
}
