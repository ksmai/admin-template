/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DropzoneComponent } from './dropzone.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement.query(By.css('.dropzone'));
  }
}

@Component({
  template: `
    <admin-dropzone url="/upload"></admin-dropzone>
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

describe('DropzoneComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [DropzoneComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the dropzone', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.innerHTML).toBeTruthy();
  });
});
