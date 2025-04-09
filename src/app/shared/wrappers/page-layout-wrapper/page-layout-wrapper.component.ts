import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-layout-wrapper',
  templateUrl: './page-layout-wrapper.component.html',
  styleUrls: ['./page-layout-wrapper.component.scss']
})
export class PageLayoutWrapperComponent implements OnInit {

  @Input() header: string;
  @Input() loading: boolean;
  @Input() leftFlex: string;
  @Input() rightFlex: string;
  constructor() { }

  ngOnInit() {
  }

}
