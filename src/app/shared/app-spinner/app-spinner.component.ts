import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './app-spinner.component.html',
  styleUrls: ['./app-spinner.component.scss']
})
export class AppSpinnerComponent implements OnInit {

  @Input() color: string;
  @Input() diameter: number;
  constructor() { }

  ngOnInit() {
  }
  getColor() {
    return this.color || 'primary';
  }

}
