/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FontComponent } from './font.component';

class Page {
  fontDE: DebugElement;

  createElements() {
    this.fontDE = fixture.debugElement.query(By.css('.glyphicon'));
  }

  assertClass(className: string) {
    expect(this.fontDE.nativeElement.classList.contains(className))
      .toBe(true);
  }
}

@Component({
  template: `
    <admin-font [name]="name" [color]="color"></admin-font>
  `,
})
class ParentComponent {
  name = 'plus';
  color = 'blue';
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

describe('FontComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [FontComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should add the glyphicon class', () => {
    component.name = 'foobar';
    fixture.detectChanges();
    page.assertClass(`glyphicon-${component.name}`);
  });

  it('should add color class', () => {
    component.color = 'somecolor';
    fixture.detectChanges();
    page.assertClass(`color-${component.color}`);
  });
});
