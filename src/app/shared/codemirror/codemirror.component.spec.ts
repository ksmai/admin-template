/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CodemirrorComponent } from './codemirror.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement;
  }
}

@Component({
  template: `
    <admin-codemirror
      [value]="'function() {\n  return 0;\n}'"
      [lineNumbers]="true">
    </admin-codemirror>
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

describe('CodemirrorComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [CodemirrorComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render codemirror', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.innerHTML).toBeTruthy();
  });
});
