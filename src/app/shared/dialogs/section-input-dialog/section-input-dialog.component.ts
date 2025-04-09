import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-input-dialog',
  templateUrl: './section-input-dialog.component.html',
  styleUrls: ['./section-input-dialog.component.scss']
})
export class SectionInputDialogComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }
  

}
