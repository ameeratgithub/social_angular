import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'department-input-dialog',
  templateUrl: './department-input-dialog.component.html',
  styleUrls: ['./department-input-dialog.component.scss']
})
export class DepartmentInputDialogComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
