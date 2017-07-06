/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EditorComponent } from './editor.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement;
  }
}

@Component({
  template: `
    <admin-editor>some initial texts</admin-editor>
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

describe('EditorComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [EditorComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the editor', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.innerHTML).toBeTruthy();
  });
});
