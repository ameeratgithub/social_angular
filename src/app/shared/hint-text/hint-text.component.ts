import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hint-text',
  templateUrl: './hint-text.component.html',
  styleUrls: ['./hint-text.component.scss']
})
export class HintTextComponent implements OnInit {

  @Input() icon;
  constructor() { }

  ngOnInit() {
  }

}
