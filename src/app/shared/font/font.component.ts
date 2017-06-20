import { Component, Input, OnChanges } from '@angular/core';

/**
 * A component wrapper around bootstrap glyphicons
 * Inputs:
 *   - name: name of the glyphicon
 *   - color: optional name of color
 *
 * @example
 * <admin-font name="plus" color="blue"></admin-font>
 */
@Component({
  selector: 'admin-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
})
export class FontComponent implements OnChanges {
  @Input() name: string;
  @Input() color: string;
  classes: { [key: string]: boolean };

  ngOnChanges(): void {
    this.classes = {
      glyphicon: true,
    };
    this.classes[`glyphicon-${this.name}`] = true;
    if (this.color) {
      this.classes[`color-${this.color}`] = true;
    }
  }
}
