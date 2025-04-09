import { Component, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions, SelectedSearchOptions } from 'src/app/shared/component-search/component-search.component';
import { University } from 'src/app/models/study/university';
import { UniversityService } from 'src/app/shared_modules/universities-list/services/university/university.service';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';

@Component({
  selector: 'search-universities-results',
  templateUrl: './search-universities-results.component.html',
  styleUrls: ['./search-universities-results.component.scss']
})
export class SearchUniversitiesResultsComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;

  searchData: SearchOptions = {
    filterOptions: [{
      text: 'All', selected: true
    }],
    sortOptions: [{ text: 'Name', selected: true }, { text: 'Location' }],
    sortOrder: true,
  };
  isLoading = true;
  universities: University[];
  constructor(
    private universityService: UniversityService,
    // private sortService: SortService,
    // public loaderService: ComponentLoaderService,
    private popoverService: AppPopoverService
  ) {
  }
  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
    this.getAll();
  }
  getAll() {
    this.isLoading = true;
    this.universityService.getAll().subscribe(this.subscriptionCallback);
  }
  subscriptionCallback = (res) => {
    this.isLoading = false;
    this.universities = res;
  }
  handleSearchInput(options: SelectedSearchOptions) {
    const searchTerm = options.searchTerm || '';
    const sort = options.sort || '';
    const filter = options.filter || '';
    const order = options.order || '';
    console.log(options);
    if (searchTerm.trim() && !filter) {
      // this.loaderService.loader(this.universityService.search(options.searchTerm), this.subscriptionCallback);
    }
    if (filter.trim() && filter === 'All') {
      this.getAll();
    }
    if (sort.trim()) {
      // this.loaderService.loader(
      //   this.sortService.sortObservables(this.universityService.getAll(), sort.trim(), order.trim()),
      //   this.subscriptionCallback
      // );
    }
  }

}
