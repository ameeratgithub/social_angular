import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree-wrapper',
  templateUrl: './tree-wrapper.component.html',
  styles: []
})
export class TreeWrapperComponent implements OnInit {

  @Input() header;
  constructor() { }

  ngOnInit() {
  }

}
