import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent implements OnInit {

  @Input() buttons: any;
  @Input() loading: boolean;
  @Input() header: string;
  @Output() dialogSaved: EventEmitter<any>;

  @Input() actions: boolean;
  constructor() {
    this.dialogSaved = new EventEmitter<any>();
  }

  ngOnInit() {
  }
  save() {
    this.dialogSaved.emit(null);
  }

}
