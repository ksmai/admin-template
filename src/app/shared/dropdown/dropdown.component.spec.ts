/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from './dropdown.component';

class Page {
  buttonComponent: ButtonComponent;

  createElements() {
    this.buttonComponent = fixture.debugElement
      .query(By.directive(ButtonComponent))
      .injector.get(ButtonComponent);
  }

  assertPassedIn(prop: string, val: any) {
    fixture.detectChanges();
    expect(this.buttonComponent[prop]).toEqual(val);
  }

  clickDropdown() {
    fixture.debugElement
      .query(By.directive(ButtonComponent))
      .query(By.css('.btn'))
      .nativeElement.click();
    fixture.detectChanges();
  }

  isDropdownOpened(): boolean {
    const de = fixture.debugElement
      .query(By.directive(ButtonComponent))
      .query(By.css('.open'));
    return !!de;
  }

  triggerEvent(evt: string) {
    const dropdownDE = fixture.debugElement
      .query(By.directive(DropdownComponent));
    dropdownDE.triggerEventHandler(evt, {
      target: dropdownDE.nativeElement,
    });
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
  }
}

@Component({
  template: `
    <admin-dropdown
      [text]="text"
      [options]="options"
      [hover]="hover"
      [disabled]="disabled"
      [tag]="tag"
      [color]="color"
      [outlined]="outlined"
      [inverse]="inverse"
      [split]="split"
      [dropup]="dropup"
      (clickBtn)="onClickBtn($event)"
    ></admin-dropdown>
  `,
})
class ParentComponent {
  text = 'Some text';
  options = [
    { option: 'option 1' },
    { option: 'option 2' },
  ];
  hover = false;
  disabled = false;
  tag = 'primary';
  color = 'red';
  outlined = false;
  inverse = false;
  split = false;
  dropup = false;
  onClickBtn = jasmine.createSpy('onClickBtn');
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

describe('DropdownComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          DropdownComponent,
          ParentComponent,
          ButtonComponent,
        ],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  it('should pass in dropdown options', () => {
    component.text = 'My text';
    component.dropup = true;
    component.split = true;
    component.disabled = true;
    component.options = [{ option: 'The only option' }];
    page.assertPassedIn('texts', [{
      text: component.text,
      dropup: component.dropup,
      split: component.split,
      disabled: component.disabled,
      options: component.options,
    }]);
  });

  it('should pass in tag', () => {
    component.tag = 'mytag';
    page.assertPassedIn('tag', component.tag);
  });

  it('should pass in color', () => {
    component.color = 'mycolor';
    page.assertPassedIn('color', component.color);
  });

  it('should pass in inverse', () => {
    component.inverse = !component.inverse;
    page.assertPassedIn('inverse', component.inverse);
  });

  it('should pass in outlined', () => {
    component.outlined = !component.outlined;
    page.assertPassedIn('outlined', component.outlined);
  });

  it('should emit on click', () => {
    page.clickDropdown();
    expect(component.onClickBtn).toHaveBeenCalled();
  });

  it('should support hover mode', fakeAsync(() => {
    component.hover = false;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    page.triggerEvent('mouseenter');
    expect(page.isDropdownOpened()).toBe(false);

    component.hover = true;
    component.disabled = false;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    page.triggerEvent('mouseenter');
    expect(page.isDropdownOpened()).toBe(true);

    page.triggerEvent('mouseleave');
    expect(page.isDropdownOpened()).toBe(false);
  }));
});
