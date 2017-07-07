/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GridComponent } from './grid.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement.query(By.directive(GridComponent));
  }

  colCount(width: number) {
    const des = this.el.queryAll(By.css(`.col-md-${width}`));
    return des.length;
  }
}

@Component({
  template: `
    <admin-grid [cols]="[4, 4, 2, 2]">
      <ng-template>col1</ng-template>
      <ng-template>col2</ng-template>
      <ng-template>col3</ng-template>
      <ng-template>col4</ng-template>
    </admin-grid>
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

describe('GridComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [GridComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should create the columns', () => {
    for (let i = 1; i <= 12; i++) {
      const expectedCount = i === 2 || i === 4 ? 2 : 0;
      expect(page.colCount(i)).toEqual(expectedCount, i);
    }
  });
});
