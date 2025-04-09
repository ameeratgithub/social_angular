import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'voting-button',
  templateUrl: './voting-button.component.html',
  styles: [
    `
    span{
      font-size:14px;
    }
    `
  ]
})
export class VotingButtonComponent implements OnInit {

  @Input() icon;
  @Input() toolTip;
  constructor() { }

  ngOnInit() {
  }

}
