import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timing-input-dialog',
  templateUrl: './timing-input-dialog.component.html',
  styleUrls: ['./timing-input-dialog.component.scss']
})
export class TimingInputDialogComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
