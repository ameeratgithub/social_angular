import { Component, OnInit } from '@angular/core';
import { SelectedSearchOptions, SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { University } from 'src/app/models/study/university';
import { UniversityService } from 'src/app/shared_modules/universities-list/services/university/university.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';

@Component({
  selector: 'universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.scss']
})
export class UniversitiesListComponent implements OnInit {

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
    private universityService: UniversityService, private sortService: SortService,
    public loaderService: ComponentLoaderService,
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
      this.loaderService.loader(this.universityService.search(options.searchTerm), this.subscriptionCallback);
    }
    if (filter.trim() && filter === 'All') {
      this.getAll();
    }
    if (sort.trim()) {
      this.loaderService.loader(
        this.sortService.sortObservables(this.universityService.getAll(), sort.trim(), order.trim()),
        this.subscriptionCallback
      );
    }
  }

}
