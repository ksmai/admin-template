import { Component, ElementRef, OnInit } from '@angular/core';
import $ = require('jquery');
import 'trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.min.css';

($ as any).trumbowyg.svgPath = require('trumbowyg/dist/ui/icons.svg');

@Component({
  selector: 'admin-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    ($(this.el.nativeElement) as any).trumbowyg({
      autogrow: true,
    });
  }
}
