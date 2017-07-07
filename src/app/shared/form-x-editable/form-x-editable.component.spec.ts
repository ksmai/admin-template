/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormXEditableComponent } from './form-x-editable.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement
      .query(By.directive(FormXEditableComponent))
      .query(By.css('a'));
  }
}

@Component({
  template: `
    <admin-form-x-editable title="Enter username">
      superuser
    </admin-form-x-editable>
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

describe('FormWizardComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [FormXEditableComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the wizard', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.innerHTML.trim()).toBeTruthy();
  });
});
