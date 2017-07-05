/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import jQuery = require('jquery');

import { BootstrapSliderComponent } from './bootstrap-slider.component';

class Page {
  debugEl: DebugElement;
  sliderComponent: BootstrapSliderComponent;

  createElements() {
    this.debugEl = fixture.debugElement.query(By.css('input'));
    this.sliderComponent = fixture.debugElement
      .query(By.directive(BootstrapSliderComponent))
      .injector.get(BootstrapSliderComponent);
  }

  assertDataAttr(attr: string, val: string) {
    expect(this.debugEl.nativeElement.dataset[attr]).toEqual(String(val));
  }
}

@Component({
  template: `
    <admin-bootstrap-slider
      [min]="min"
      [max]="max"
      [step]="step"
      [(value)]="value"
      [color]="color"
      [handle]="handle"
      [colorHandle]="colorHandle"
      [disabled]="disabled"
      [vertical]="vertical"
      [reversed]="reversed"
      [tooltip]="tooltip"
    ></admin-bootstrap-slider>
  `,
})
class ParentComponent {
  min = '50';
  max = '245';
  step = '5';
  value = '32';
  color = 'blue';
  handle = 'triangle';
  colorHandle = true;
  disabled = false;
  vertical = false;
  reversed = false;
  tooltip = 'show';
}

let fixture: ComponentFixture<ParentComponent>;
let component: ParentComponent;
let page: Page;

function createParentComponent() {
  fixture = TestBed.createComponent(ParentComponent);
  component = fixture.componentInstance;
  page = new Page();
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page.createElements();
  });
}

describe('BootstrapSliderComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [BootstrapSliderComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should pass input as data attributes', () => {
    ['min', 'max', 'step', 'value', 'handle', 'reversed', 'tooltip']
      .forEach((attr: string) => {
        const dataAttr = 'slider' + attr[0].toUpperCase() + attr.slice(1);
        page.assertDataAttr(dataAttr, component[attr]);
      });

    page.assertDataAttr('sliderEnabled', String(!component.disabled));
    page.assertDataAttr(
      'sliderOrientation',
      component.vertical ? 'vertical' : 'horizontal',
    );
  });

  it('should be disabled programmatically', () => {
    const spy = spyOn((jQuery as any).fn as any, 'slider');
    component.disabled = !component.disabled;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('toggle');
  });

  it('should emit new value on slider', () => {
    page.sliderComponent.onSlide(42);
    fixture.detectChanges();
    expect(+component.value).toBe(42);
  });
});
