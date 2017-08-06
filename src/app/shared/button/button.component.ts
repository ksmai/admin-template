import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import 'bootstrap/js/dropdown';

export interface IDropdownOption {
  option: string;
  disabled?: boolean;
  isHeader?: boolean;
}

export interface IDropdown {
  text: string;
  options?: Array<string|IDropdownOption>;
  split?: boolean;
  dropup?: boolean;
  disabled?: boolean;
}

/**
 * The ButtonComponent is built on top of bootstrap buttons/dropdowns
 *   - Changing size: `size="lg"`, `size="sm"`, `size="xs"`
 *   - Changing tag: `tag="info"`, ...
 *   - Changing color: `color="red"`, ...
 *   - Outlined button: `[outlined]="true"`
 *   - Inverse button: `[inverse]="true"`
 *   - Single icon button: `[icon]="true"`
 * @exmaple
 * <admin-button size="lg" color="pink">Hello</admin-button>
 *
 * For button groups, pass in a list of texts as `texts`
 * @example
 * <admin-button [texts]="['a', 'b', 'c']" tag="primary"></admin-button>
 *
 * If buttons in a button group have different tags/colors, use
 * `colors` or `tags` instead
 * @exmaple
 * <admin-button [texts]="['1', '2']" [colors]="['red', 'blue']">
 * </admin-button>
 *
 * To listen for click events:
 * @exmaple
 * <admin-button [texts]="['1', '2']" (clickBtn)="myCB($event)">
 * </admin-button>
 *
 * For justified/vertical button groups, use `[justified]="true"`
 * and `[vertical]="true"`
 *
 * For dropdown menu within button groups, pass in an object to the
 * `texts` array
 * @example
 * <admin-button [texts]="['a', { text: 'dropdown', options: ['1', '2'],
 *   dropup: false, split: false }]"</admin-button>
 *
 * Dropdown menu options can have headers or be disabled
 * @example
 * <admin-button [texts]="[{ text: 'dropdown', options: [{ option: '1',
 *   disable: true }, { option: 'header', isHeader: true }, '3', '4'] }]">
 * </admin-button>
 */
@Component({
  selector: 'admin-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges, OnInit {
  @Input() size: string;
  @Input() color: string;
  @Input() tag: string = 'default';
  @Input() colors: string[];
  @Input() tags: string[];
  @Input() outlined: boolean = false;
  @Input() inverse: boolean = false;
  @Input() disabled: boolean = false;
  @Input() texts: Array<string|IDropdown>;
  @Input() justified: boolean = false;
  @Input() vertical: boolean = false;
  @Input() icon: boolean = false;
  @Output() clickBtn = new EventEmitter<any>();
  classes: { [key: string]: boolean };
  classLists: Array<{ [key: string]: boolean }>;
  groupClasses: { [key: string]: boolean };

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.classes = {
      'btn': true,
      'btn-lg': this.size === 'lg',
      'btn-sm': this.size === 'sm',
      'btn-xs': this.size === 'xs',
      'btn-default': this.tag === 'default',
      'btn-primary': this.tag === 'primary',
      'btn-success': this.tag === 'success',
      'btn-info': this.tag === 'info',
      'btn-warning': this.tag === 'warning',
      'btn-danger': this.tag === 'danger',
      'btn--outlined': this.outlined,
      'btn--inverse': this.inverse && !this.outlined,
      'btn--icon': this.icon && !this.size && !this.texts,
    };

    if (this.color) {
      this.classes[`btn-${this.color.toLowerCase()}`] = true;
    }

    if (this.texts) {
      this.classLists = this.texts.map((text, i) => {
        const classes = Object.assign({}, this.classes);

        if (this.tags && this.tags[i]) {
          classes[`btn-${this.tags[i]}`] = true;
        }

        if (this.colors && this.colors[i]) {
          classes[`btn-${this.colors[i]}`] = true;
        }

        return classes;
      });

      this.groupClasses = {
        'btn-group': !this.vertical,
        'btn-group-vertical': this.vertical,
        'btn-group-justified': this.justified,
      };
    }
  }

  onClick(evt: any, idx: number, optionIdx?: number): void {
    this.clickBtn.emit({
      event: evt,
      index: idx,
      optionIndex: optionIdx,
    });
  }
}
