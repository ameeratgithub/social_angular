import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'session-input-dialog',
  templateUrl: './session-input-dialog.component.html',
  styleUrls: ['./session-input-dialog.component.scss']
})
export class SessionInputDialogComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
