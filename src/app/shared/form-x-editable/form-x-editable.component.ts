import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'bootstrap/js/tooltip';
import 'moment';
import 'select2/select2';
import 'select2/select2-bootstrap.css';
import 'select2/select2.css';
import 'typeahead.js/dist/typeahead';

import 'bootstrap/js/popover';

// This file is copied to fix some syntax issues causing problems in
// production build
// import 'X-editable/dist/bootstrap3-editable/css/bootstrap-editable.css';
import 'X-editable/dist/bootstrap3-editable/js/bootstrap-editable';
import '../../../styles/bootstrap-editable.css';

import 'X-editable/dist/inputs-ext/address/address';
import 'X-editable/dist/inputs-ext/address/address.css';
import 'X-editable/dist/inputs-ext/typeaheadjs/lib/typeahead.js-bootstrap.css';
import 'X-editable/dist/inputs-ext/typeaheadjs/typeaheadjs';

/**
 * A component wrapping around X-editable
 * Note that the latest versions of typeahead.js and select2 are not
 * compatible with X-editable
 * Some legacy libraries used in this components also have subtle bugs
 * so use at your own risk
 *
 * Inputs:
 *   - type: 'text' (default) | 'combodate' | 'textarea' | 'select' |
 *     'typeahead' | 'checklist' | 'select2' | 'address' | ...
 *   - title: string, optional
 *   - url, pk, id, name: optional, used for sending requests to server
 *     see x-editable documentation for details
 *   - mode: 'popup' (default) | 'inline'
 *   - disabled: default to false
 *   - required: default to false
 *   - showbuttons: true (default) | false | 'bottom'
 *   - source: data for select, select2, checklist
 *   - combodateTemplate: format of datetime display for combodate
 *   - typeahead: payload of typeahead options
 *   - select2: payload of select2 options
 */
@Component({
  selector: 'admin-form-x-editable',
  templateUrl: './form-x-editable.component.html',
  styleUrls: ['./form-x-editable.component.scss'],
})
export class FormXEditableComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() type: string = 'text';
  @Input() title: string;
  @Input() url: string;
  @Input() pk: string;
  @Input() id: string;
  @Input() name: string;
  @Input() value: string|any;
  @Input() mode: string = 'popup';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() showbuttons: boolean|string = true;
  @Input() source: Array<{ value: number, text: string }>;
  @Input() combodateTemplate: string;
  @Input() combodateViewformat: string;
  @Input() typeahead: any;
  @Input() select2: any;

  @ViewChild('editable') private el: any;

  // FIXME
  // An unresolved bug occurs when destroying x-editable with select2
  // See https://stackoverflow.com/questions/34884841/cant-destroy-x-editable-select2
  ngOnDestroy(): void {
    if (this.type !== 'select2') {
      ($(this.el.nativeElement) as any).editable('destroy');
    }
  }

  ngAfterViewInit(): void {
    const options = {
      type: this.type,
      url: this.url,
      pk: this.pk,
      title: this.title,
      name: this.name,
      id: this.id,
      mode: this.mode,
      disabled: this.disabled,
      showbuttons: this.showbuttons,
      value: this.value,
      source: this.source,
    };

    if (this.required) {
      Object.assign(options, {
        validate(s: string) {
          if (!s || !s.trim()) {
            return 'Required field';
          }
        },
      });
    }

    if (this.type === 'combodate' && this.combodateTemplate) {
      Object.assign(options, { template: this.combodateTemplate });
    }

    if (this.type === 'combodate' && this.combodateViewformat) {
      Object.assign(options, { viewformat: this.combodateViewformat });
    }

    if (this.type === 'typeaheadjs' && this.typeahead) {
      Object.assign(options, { typeahead: this.typeahead });
    }

    if (this.type === 'select2' && this.select2) {
      Object.assign(options, { select2: this.select2 });
    }

    setTimeout(() => {
      ($(this.el.nativeElement) as any).editable(options);
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const $el: any = $(this.el.nativeElement) as any;
    for (const key in changes) {
      if (changes.hasOwnProperty(key) && !changes[key].firstChange) {
        if (key === 'mode') {
          if (this.type === 'select2') {
          // https://github.com/vitalets/x-editable/issues/488
          // a bug that prevents select2 x-editable from being
          // destroyed that had not been fixed for years
            if (!$el.data('editable').input.$input) {
              $el.data('editable').input.$input = $({} as any);
            }
          }
          ($(this.el.nativeElement) as any).editable('destroy');
          this.ngAfterViewInit();
        } else {
          ($(this.el.nativeElement) as any).editable(
            'option',
            key,
            changes[key].currentValue,
          );
        }
      }
    }
  }
}
