import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-details-item',
  templateUrl: './question-details-item.component.html',
  styleUrls: ['./question-details-item.component.scss']
})
export class QuestionDetailsItemComponent implements OnInit {

  showCommentInput = false;
  constructor() { }

  ngOnInit() {
  }

}
