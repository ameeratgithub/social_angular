import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'campus-input-dialog',
  templateUrl: './campus-input-dialog.component.html',
  styleUrls: ['./campus-input-dialog.component.scss']
})
export class CampusInputDialogComponent implements OnInit {

  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
