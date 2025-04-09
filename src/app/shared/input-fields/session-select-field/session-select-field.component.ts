import { Component, OnInit } from '@angular/core';
import { Batch } from 'src/app/models/study/batch';

@Component({
  selector: 'session-select-field',
  templateUrl: './session-select-field.component.html',
  styleUrls: ['./session-select-field.component.scss']
})
export class SessionSelectFieldComponent implements OnInit {
  sessions: Batch[] = [];
  constructor() {
    const date = new Date().getFullYear();
    for (let i = date; i > (date - 7); i--) {
      this.sessions.push({ id: i, name: '' + i } as Batch);
    }
  }
  ngOnInit() {
  }

}
