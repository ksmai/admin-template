/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImageCropComponent } from './image-crop.component';

class Page {
  el: DebugElement;

  createElements() {
    this.el = fixture.debugElement.query(By.css('.jcrop-holder'));
  }
}

@Component({
  template: `
    <admin-image-crop
     [src]="src"
     [setSelect]="selection"
     [bgColor]="bgColor"
     [bgOpacity]="bgOpacity"
    ></admin-image-crop>
  `,
})
class ParentComponent {
  src = 'some/url';
  selection = [100, 200, 300, 400];
  bgColor = 'red';
  bgOpacity = 0.5;
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

describe('ImageCropComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ImageCropComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should initialize jCrop', () => {
    expect(page.el).toBeDefined();
  });
});
