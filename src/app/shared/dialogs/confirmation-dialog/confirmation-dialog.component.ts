import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() confirmationText = '';
  @Output() confirmed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  confirm() {
    this.confirmed.emit(null);
  }

}
