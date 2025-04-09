import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-info',
  template: `
    <div class="error mat-t-teal-l2">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    .error{
      text-align:center
    }
    `
  ]
})
export class ErrorInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
