import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import $ = require('jquery');
import 'trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.min.css';

($ as any).trumbowyg.svgPath = require('trumbowyg/dist/ui/icons.svg');

@Component({
  selector: 'admin-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {
  }

  ngOnDestroy(): void {
    ($(this.el.nativeElement) as any).trumbowyg('destroy');
  }

  ngOnInit(): void {
    setTimeout(() => {
      ($(this.el.nativeElement) as any).trumbowyg({
        autogrow: true,
      });
    }, 0);
  }
}
