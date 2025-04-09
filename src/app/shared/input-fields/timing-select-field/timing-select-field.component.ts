import { Component, OnInit } from '@angular/core';
import { CampusTiming } from 'src/app/models/study/campus-timing';

@Component({
  selector: 'timing-select-field',
  templateUrl: './timing-select-field.component.html',
  styleUrls: ['./timing-select-field.component.scss']
})
export class TimingSelectFieldComponent implements OnInit {

  timings: CampusTiming[] = [
    { id: 1, name: 'Timing 1' },
    { id: 2, name: 'Timing 2' },
    { id: 3, name: 'Timing 3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
