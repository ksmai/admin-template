/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { C3JSChartComponent } from './c3js-chart.component';

class Page {
  el: any;

  createElements() {
    this.el = fixture.debugElement
      .query(By.directive(C3JSChartComponent))
      .injector.get(C3JSChartComponent).divEl;
  }
}

@Component({
  template: `
    <admin-c3js-chart
      [columns]="[
        ['data1', -30, 200, 200, 400, -150, 250],
        ['data2', 130, 100, -100, 200, -150, 50],
        ['data3', -230, 200, 200, -300, 250, 250]
      ]"
      type="bar"
      [group]="true"
    ></admin-c3js-chart>
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

describe('C3JSChartComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [C3JSChartComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the chart', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.innerHTML).toBeTruthy();
  });
});
