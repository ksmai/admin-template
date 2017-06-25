import {
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/ambiance.css';

/**
 * A component wrapping around CodeMirror
 * Default to 'javascript' mode and 'ambiance' theme
 * To switch to other modes and themes make sure the corresponding
 * js/css files are included properly
 *
 * @example
 * <admin-codemirror
 *   [value]="'function() {\n  return 0;\n}'"
 *   [lineNumbers]="true">
 * </admin-codemirror>
 */
@Component({
  selector: 'admin-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss'],
})
export class CodemirrorComponent implements OnInit {
  @Input() value: string = '';
  @Input() lineNumbers: boolean = true;

  private codemirror: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.codemirror = CodeMirror(this.el.nativeElement, {
        mode: 'javascript',
        theme: 'ambiance',
        value: this.value,
        lineNumbers: this.lineNumbers,
      });
    }, 0);
  }
}
