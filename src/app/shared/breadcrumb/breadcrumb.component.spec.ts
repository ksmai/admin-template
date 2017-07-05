/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BreadcrumbComponent } from './breadcrumb.component';

class Page {
  links: DebugElement[];
  list: DebugElement;

  createElements() {
    this.links = fixture.debugElement.queryAll(By.css('.link'));
    this.list = fixture.debugElement.query(By.css('.breadcrumb'));
  }
}

@Component({
  template: `
    <admin-breadcrumb [color]="color" [links]="links"></admin-breadcrumb>
  `,
})
class ParentComponent {
  links = [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data' },
  ];
  color = 'somecolor';
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

describe('BreadcrumbComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [BreadcrumbComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should create a link for each item, except the last', () => {
    expect(page.links.length).toEqual(component.links.length - 1);
    const lastLabel = component.links[component.links.length - 1].label;
    page.links.forEach((link: DebugElement) => {
      expect(link.nativeElement.textContent).not.toContain(lastLabel);
    });
  });

  it('should set a class for color', () => {
    const hasClass = page.list.nativeElement.classList
      .contains(`breadcrumb--${component.color}`);
    expect(hasClass).toBe(true);
  });
});
