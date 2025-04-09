import { Component, OnInit, Input } from '@angular/core';
import { University } from 'src/app/models/study/university';

@Component({
  selector: 'university-item',
  templateUrl: './university-item.component.html',
  styleUrls: ['./university-item.component.scss']
})
export class UniversityItemComponent implements OnInit {
  @Input() university: University;
  constructor() { }

  ngOnInit() {
  }


}
