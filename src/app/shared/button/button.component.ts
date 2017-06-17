import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import 'bootstrap/js/dropdown';

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
  @Input() texts: Array<string|{ text: string, options: string[] }>;
  @Input() justified: boolean = false;
  @Input() vertical: boolean = false;
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
