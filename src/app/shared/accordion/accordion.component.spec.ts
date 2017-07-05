/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AccordionComponent } from './accordion.component';

class Page {
  panels: DebugElement[];

  createElements() {
    this.panels = fixture.debugElement.queryAll(By.css('.panel'));
  }
}

@Component({
  template: `
    <admin-accordion [items]="items"></admin-accordion>
  `,
})
class ParentComponent {
  items = [
    { header: 'item #1', content: 'some content' },
    { header: 'item #2', content: 'some content' },
    { header: 'item #3', content: 'some content' },
  ];
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

describe('AccordionComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [AccordionComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should create one panel per item', () => {
    expect(page.panels.length).toEqual(component.items.length);
  });
});
