import { Component, OnInit, Input } from '@angular/core';
import { Datesheet } from '../../../models/study/datesheet';
import { Timetable } from '../../../models/study/timetable';

@Component({
  selector: 'dt-wrapper',
  templateUrl: './dt-wrapper.component.html',
  styleUrls: ['./dt-wrapper.component.scss']
})
export class DtWrapperComponent implements OnInit {
  @Input() title: string;
  @Input() item: Datesheet | Timetable;
  constructor() { }

  ngOnInit() {
  }

}
