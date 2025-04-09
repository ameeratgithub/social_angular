import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  allTags: any[] = [
    { id: 1, name: 'tag-1', count: 100 },
    { id: 2, name: 'tag-2', count: 200 },
    { id: 3, name: 'tag-3', count: 300 },
    { id: 4, name: 'tag-4', count: 400 },
    { id: 5, name: 'tag-5', count: 500 },
    { id: 6, name: 'tag-6', count: 600 },
    { id: 7, name: 'tag-7', count: 700 },
    { id: 8, name: 'tag-8', count: 800 },
  ];
  ngOnInit() {
  }

}
