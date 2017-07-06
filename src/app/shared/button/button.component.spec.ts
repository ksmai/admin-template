/* tslint:disable:max-classes-per-file */
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent, IDropdown } from './button.component';

let fixture: ComponentFixture<ParentComponent>;
let component: ParentComponent;
let page: Page;

class Page {
  btn: DebugElement;
  btnGroup: DebugElement;
  btnGroupBtns: DebugElement[];

  createElements() {
    this.btn = fixture.debugElement.query(By.css('.btn'));
    this.btnGroup = fixture.debugElement.query(By.css('.btn-group'));
    if (this.btnGroup) {
      this.btnGroupBtns = this.btnGroup
        .queryAll(By.css('.btn:first-child'));
    }
  }

  changeProp(prop: string, val: any) {
    component[prop] = val;
    fixture.detectChanges();
  }

  assertBtnClass(className: string, exists = true) {
    expect(this.btn.nativeElement.classList.contains(className))
      .toBe(exists);
  }

  clickBtn() {
    this.btn.nativeElement.click();
    fixture.detectChanges();
  }

  assertBtnGroupClass(className: string, exists = true) {
    expect(this.btnGroup.nativeElement.classList.contains(className))
      .toBe(exists);
  }

  assertBtnGroupBtnsClass(...classNames: string[]) {
    while (classNames.length < this.btnGroupBtns.length) {
      classNames.push(classNames[0]);
    }
    classNames.forEach((className: string, i: number) => {
      const hasClass = this.btnGroupBtns[i].nativeElement.classList
        .contains(className);
      expect(hasClass).toBe(true);
    });
  }
}

@Component({
  template: `
    <admin-button
      [size]="size"
      [color]="color"
      [tag]="tag"
      [outlined]="outlined"
      [inverse]="inverse"
      [colors]="colors"
      [tags]="tags"
      [disabled]="disabled"
      [texts]="texts"
      [vertical]="vertical"
      [justified]="justified"
      (clickBtn)="onClickBtn($event)"
    >Just a button</admin-button>
  `,
})
class ParentComponent {
  size = 'lg';
  color = 'palepink';
  tag = 'danger';
  outlined = true;
  inverse = true;
  colors: string[];
  tags: string[];
  disabled = false;
  vertical = false;
  justified = false;
  texts: Array<string|IDropdown>;
  onClickBtn = jasmine.createSpy('onClickBtn');
}

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

describe('ButtonComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ButtonComponent, ParentComponent],
      })
      .compileComponents()
      .then(() => createParentComponent());
  }));

  describe('Single button', () => {
    it('should add size classes', () => {
      ['sm', 'xs', 'lg'].forEach((size) => {
        page.changeProp('size', size);
        page.assertBtnClass(`btn-${size}`);
      });
      page.changeProp('size', null);
      page.assertBtnClass('btn-lg', false);
    });

    it('should add tag classes', () => {
      ['default', 'primary', 'info', 'warning', 'danger', 'success']
        .forEach((tag) => {
          page.changeProp('tag', tag);
          page.assertBtnClass(`btn-${tag}`);
        });
    });

    it('should set outlined', () => {
      page.changeProp('outlined', true);
      page.assertBtnClass('btn--outlined');
    });

    it('should set inverse when outlined is not set', () => {
      page.changeProp('outlined', true);
      page.changeProp('inverse', true);
      page.assertBtnClass('btn--inverse', false);
      page.changeProp('outlined', false);
      page.assertBtnClass('btn--inverse', true);
    });

    it('should set color class', () => {
      const color = 'someawesomecolor';
      page.changeProp('color', color);
      page.assertBtnClass(`btn-${color}`);
    });

    it('should emit on click', () => {
      page.clickBtn();
      expect(component.onClickBtn).toHaveBeenCalled();
    });
  });

  describe('Button group', () => {
    beforeEach(() => {
      page.changeProp('texts', ['a', 'b', 'c', 'd']);
      page.createElements();
    });

    it('should create a group of buttons', () => {
      expect(page.btnGroupBtns.length).toEqual(component.texts.length);
    });

    it('should set size', () => {
      ['lg', 'xs', 'sm'].forEach((size) => {
        page.changeProp('size', size);
        page.assertBtnGroupBtnsClass(`btn-${size}`);
      });
    });

    it('should add a common tag', () => {
      ['default', 'primary', 'info', 'warning', 'danger', 'success']
        .forEach((tag) => {
          page.changeProp('tag', tag);
          page.assertBtnGroupBtnsClass(`btn-${tag}`);
        });
    });

    it('should add different tags for each button', () => {
      const tags = ['primary', 'success', 'info', 'warning'];
      const classNames = tags.map((tag) => `btn-${tag}`);
      page.changeProp('tags', tags);
      page.assertBtnGroupBtnsClass(...classNames);
    });

    it('should set outlined', () => {
      page.changeProp('outlined', true);
      page.assertBtnGroupBtnsClass('btn--outlined');
    });

    it('should set inverse when outlined is not set', () => {
      page.changeProp('inverse', true);
      page.changeProp('outlined', false);
      page.assertBtnGroupBtnsClass('btn--inverse');
    });

    it('should set vertical', () => {
      const el = page.btnGroup.nativeElement;
      page.changeProp('vertical', true);
      const hasClass = el.classList.contains('btn-group-vertical');
      expect(hasClass).toBe(true);
    });

    it('should set justified', () => {
      page.changeProp('justified', true);
      page.assertBtnGroupClass('btn-group-justified');
    });

    it('should emit on click', () => {
      page.btnGroupBtns.forEach((btn) => {
        component.onClickBtn.calls.reset();
        btn.nativeElement.click();
        fixture.detectChanges();
        expect(component.onClickBtn).toHaveBeenCalled();
      });
    });
  });
});
