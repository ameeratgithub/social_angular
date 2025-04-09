import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'university-input-dialog',
  templateUrl: './university-input-dialog.component.html',
  styleUrls: ['./university-input-dialog.component.scss']
})
export class UniversityInputDialogComponent implements OnInit {

  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
