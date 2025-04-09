import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'program-input-dialog',
  templateUrl: './program-input-dialog.component.html',
  styleUrls: ['./program-input-dialog.component.scss']
})
export class ProgramInputDialogComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
