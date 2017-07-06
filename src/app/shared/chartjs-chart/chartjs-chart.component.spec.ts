/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChartJSChartComponent } from './chartjs-chart.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement.query(By.css('canvas'));
  }
}

@Component({
  template: `
    <admin-chartjs-chart
     type="bar"
     [labels]="['Apple', 'Orange', 'Pineapple', 'Grape', 'Banana']"
     [datasets]="{ label: '# of fruits', data: [3, 5, 9, 1, 2] }"
     [width]="1000"
     [height]="300"
    ></admin-chartjs-chart>
  `,
})
class ParentComponent {
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

describe('ChartJSChartComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ChartJSChartComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the chart', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.style.display).toBe('block');
  });
});
