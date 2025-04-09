import { Component, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';

@Component({
  selector: 'blog-questions',
  templateUrl: './blog-questions.component.html',
  styleUrls: ['./blog-questions.component.scss']
})
export class BlogQuestionsComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;
  searchData: SearchOptions = {
    filterOptions: [{
      text: 'All', selected: true
    }],
    sortOptions: [{ text: 'Title', selected: true }, { text: 'Votes' }, { text: 'Date' }],
    sortOrder: true,
  };
  constructor(
    private popoverService: AppPopoverService
  ) { }

  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
  }
  handleSearchInput(data) {

  }
}
