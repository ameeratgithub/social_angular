import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.scss']
})
export class ListWrapperComponent implements OnInit {

  @Input() title;
  @Input() subtitle;
  constructor() { }

  ngOnInit() {
  }

}
