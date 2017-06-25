import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import $ = require('jquery');
import 'jquery-steps/build/jquery.steps';
import 'jquery-steps/demo/css/jquery.steps.css';
import 'jquery-validation';

/**
 * A component wrapper for jquery-steps
 * Inputs:
 *   - headerTag: default to 'h3'
 *   - bodyTag: default to 'section'
 *   - transitionEffect: default to 'slideLeft'
 *   - autoFocus: default to true
 *   - form: optional, the HTMLFormElement that will be validated using
 *     jquery-validation
 *   - dynamic: default to false, automatically generate the sections
 *     required to dynamically manipulate the steps
 *   - vertical: orientation of the wizard, default to false
 *
 * @example
 * <admin-form-wizard [vertical]="true">
 *   <h3>Keyboard</h3>
 *   <section>
 *     <p>Try the keyboard navigation by clicking arrow left or right!</p>
 *   </section>
 *   <h3>Effects</h3>
 *   <section>
 *     <p>Wonderful transition effects.</p>
 *   </section>
 *   <h3>Pager</h3>
 *   <section>
 *     <p>nice pagers</p>
 *   </section>
 * <admin-form-wizard>
 */
@Component({
  selector: 'admin-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
})
export class FormWizardComponent implements AfterViewInit {
  @Input() headerTag: string = 'h3';
  @Input() bodyTag: string = 'section';
  @Input() transitionEffect: string = 'slideLeft';
  @Input() autoFocus: boolean = true;
  @Input() form: any;
  @Input() dynamic: boolean = false;
  @Input() vertical: boolean = false;
  private wizard: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.init(), 0);
  }

  add(title: string, content: string): void {
    ($(this.el.nativeElement) as any).steps('add', { title, content });
  }

  insert(position: number, title: string, content: string): void {
    if (!Number.isInteger(position)) {
      return;
    }
    ($(this.el.nativeElement) as any).steps('insert', position, {
      title,
      content,
    });
  }

  remove(position: number): void {
    if (!Number.isInteger(position)) {
      return;
    }
    ($(this.el.nativeElement) as any).steps('remove', position);
  }

  private init(): void {
    const options = {
      headerTag: this.headerTag,
      bodyTag: this.bodyTag,
      transitionEffect: this.transitionEffect,
      autoFocus: this.autoFocus,
      stepsOrientation: this.vertical ? 'vertical' : 'horizontal',
    };

    if (this.form) {
      const $form = $(this.form) as any;
      $form.validate({
        errorPlacement: (err: any, el: any) => el.before(err),
      });

      Object.assign(options, {
        onStepChanging: () => {
          $form.validate({ ignore: ':disabled,:hidden' });
          return $form.valid();
        },
        onFinishing: () => {
          $form.validate({ ignore: ':disabled' });
          return $form.valid();
        },
        onFinished: () => {
          window.alert('Submitted!');
        },
      });
    }

    const $el: any = $(this.el.nativeElement) as any;
    this.wizard = $el.steps(options);
    if (this.dynamic) {
      // angular event binding cannot be used here because
      // jquery steps clear all the bindings automatically
      // and elements cannot be injected into the wizard after creation
      $el.find('.add-button').on('click', () => {
        const title = $el.find('.add-title').val();
        const content = $el.find('.add-content').val();
        this.add(title, content);
      });
      $el.find('.insert-button').on('click', () => {
        const position = Number($el.find('.insert-position').val());
        const title = $el.find('.insert-title').val();
        const content = $el.find('.insert-content').val();
        this.insert(position, title, content);
      });
      $el.find('.remove-button').on('click', () => {
        const position = Number($el.find('.remove-position').val());
        this.remove(position);
      });
    }
  }
}
