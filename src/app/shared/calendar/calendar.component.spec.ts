/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CalendarComponent, IEvent } from './calendar.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement
      .query(By.directive(CalendarComponent))
      .query(By.css('.calendar'));
  }
}

@Component({
  template: `
    <admin-calendar
      [events]="events"
      defaultDate="2046-11-01"
    ></admin-calendar>
  `,
})
class ParentComponent {
  events: IEvent[] = [];
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

describe('CalendarComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [FormsModule],
        declarations: [CalendarComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should render the calendar', () => {
    expect(page.el).toBeDefined();
    expect(page.el.nativeElement.innerHTML).toBeTruthy();
  });
});
