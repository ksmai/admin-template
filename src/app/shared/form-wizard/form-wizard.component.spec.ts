/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from '../button/button.component';
import { FormWizardComponent } from './form-wizard.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement.query(By.directive(FormWizardComponent));
  }
}

@Component({
  template: `
    <admin-form-wizard [vertical]="true">
      <h3>Keyboard</h3>
      <section>
        <p>Left/right</p>
      </section>
      <h3>Effects</h3>
      <section>
        <p>Wonderful transition effects.</p>
      </section>
      <h3>Pager</h3>
      <section>
        <p>nice pagers</p>
      </section>
    <admin-form-wizard>
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
        declarations: [
          ButtonComponent,
          FormWizardComponent,
          ParentComponent,
        ],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the wizard', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.classList.contains('wizard')).toBe(true);
  });
});
