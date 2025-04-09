import { Component } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';

@Component({
  selector: 'questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent {

  popoverPosition: ConnectionPositionPair;
  searchData: SearchOptions = {
    filterOptions: [{
      text: 'All', selected: true
    }],
    sortOptions: [{ text: 'Name', selected: true }, { text: 'Location' }],
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
