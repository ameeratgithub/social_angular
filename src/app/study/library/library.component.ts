import { Component, OnInit } from '@angular/core';
import { SelectedSearchOptions, SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { Library } from '../../models/study/library';
import { LibraryService } from '../services/library/library.service';
import { LibraryDialogService } from './library-dialog/library-dialog.service';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'university-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  library: Library;
  isUniversityLink = false;
  header = "Global Library";
  searchData: SearchOptions = {
    filterOptions: [
      { text: 'All', selected: true }, { text: 'Recent' }, { text: '5', icon: 'star' },
      { text: '4', icon: 'star' },
      { text: '3', icon: 'star' }, { text: '2', icon: 'star' }, { text: '1', icon: 'star' }
    ],
    sortOptions: [
      { text: 'Name', selected: true }, { text: 'Rating' }, { text: 'Downloads' },
      { text: 'Reviews' }, { text: 'Published' }
    ],
    sortOrder: true,
  };
  popoverPosition: ConnectionPositionPair
  constructor(
    private libraryService: LibraryService,
    private dialogService: LibraryDialogService,
    public loaderService: ComponentLoaderService,
    private popoverService: AppPopoverService,
    private route: ActivatedRoute

  ) {
  }

  ngOnInit() {
    this.popoverPosition=this.popoverService.getTopRightPosition();
    this.checkRouteParams();
    this.getData();
  }
  getAll() {
    this.loaderService.loader(this.libraryService.getLibrary(), res => {
      this.library = res;
    });
  }
  checkRouteParams() {
    this.route.queryParamMap.subscribe(queryParams => {
      const area = queryParams.get("area");
      const id = queryParams.get("id");
      this.isUniversityLink = !!(area && id);
      this.getData();
    });
  }
  getData() {
    if (this.isUniversityLink) {
      this.header = "University of Gujrat's Library";
    }
    else{
      this.header = "Global Library";
    }
    this.getAll();
  }
  handleSearchInput(options: SelectedSearchOptions) {
    const searchTerm = options.searchTerm || '';
    const sort = options.sort || '';
    const filter = options.filter || '';
    const order = options.order || '';
    console.log(options);
    if (searchTerm.trim()) {

    }
    if (filter.trim() && filter === 'All') {

    }
    if (sort.trim()) {

    }
  }
  openDialog() {
    const dialogRef = this.dialogService.open();
    const instance = dialogRef.componentInstance;
    instance.header = 'Add new book';
  }

}
