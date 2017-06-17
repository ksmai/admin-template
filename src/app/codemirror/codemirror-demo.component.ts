import { Component } from '@angular/core';

@Component({
  templateUrl: './codemirror-demo.component.html',
  styleUrls: ['./codemirror-demo.component.scss'],
})
export class CodemirrorDemoComponent {
  value = `function debounce(fn, t = 300) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), t);
  };
}`;
}
