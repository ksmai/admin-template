/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  InteractiveTimelineComponent,
} from './interactive-timeline.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement.query(By.css('.timeline'));
  }
}

const fakeTL = {
  Timeline(el: HTMLElement) {
    el.innerHTML = 'some things';
  },
};
Object.assign(window, { TL: fakeTL });

@Component({
  template: `
    <admin-interactive-timeline [data]="demoData" [height]="550">
    </admin-interactive-timeline>
  `,
})
class ParentComponent {
  demoData = {
    title: {
      text: {
        headline: 'headline',
        text: '<p>Some texts</p>',
      },
    },
    events: [
      {
        start_date: {
          month: '8',
          day: '9',
          year: '1963',
        },
        text: {
          headline: 'first event',
          text: '<p>lorem ipsum</p>',
        },
      },
      {
        start_date: {
          year: '1978',
        },
        text: {
          headline: 'second event',
          text: 'Lorem ipsum dolor...',
        },
      },
    ],
  };
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

describe('InteractiveTimelineComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [InteractiveTimelineComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should initialize the timeline', () => {
    expect(page.el).toBeDefined();
  });
});
