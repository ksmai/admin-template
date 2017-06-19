import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import $ = require('jquery');
import 'bootstrap/js/modal';

/**
 * A component wrapper around bootstrap modals
 * including a button for triggering the modal
 * Input:
 *   - size: 'lg' | 'sm', omit if normal size is desired
 *
 * To customize the content of the modal, pass in content children with
 * the following attributes:
 *   - modalButton: the text on the triggering button
 *   - modalTitle: title of the modal
 *   - modalNo: the text on the negative button
 *   - modalYes: the text on the affirmative button
 * anything else will be put in the modal body
 *
 * @example
 * <admin-modal>
 *   <ng-container modalButton>Launch basic modal</ng-container>
 *   <ng-container modalTitle>Modal title</ng-container>
 *   <ng-container>One fine body&hellip;</ng-container>
 *   <ng-container modalNo>Close</ng-container>
 *   <ng-container modalYes>Save Changes</ng-container>
 * </admin-modal>
 */
@Component({
  selector: 'admin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges, OnInit {
  @Input() size: string;
  classes: { [key: string]: boolean };

  @ViewChild('modal') private modal: any;

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.classes = {
      'modal-dialog': true,
      'modal-sm': this.size === 'sm',
      'modal-lg': this.size === 'lg',
    };
  }

  onLaunch(): void {
    ($(this.modal.nativeElement) as any).modal('show');
  }

  onClose(): void {
    ($(this.modal.nativeElement) as any).modal('hide');
  }
}
