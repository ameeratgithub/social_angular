import { Component, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { ProjectDialogService } from '../project-dialog/project-dialog.service';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'university-projects',
  templateUrl: './university-projects.component.html',
  styleUrls: ['./university-projects.component.scss']
})
export class UniversityProjectsComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;
  isUniversityLink = false;
  header = "Global Projects";
  searchData: SearchOptions = {
    filterOptions: [
      { text: 'All', selected: true }, { text: 'Recent' }, { text: '5', icon: 'star' },
      { text: '4', icon: 'star' },
      { text: '3', icon: 'star' }, { text: '2', icon: 'star' }, { text: '1', icon: 'star' }
    ],
    sortOptions: [
      { text: 'Name', selected: true }, { text: 'Rating' }, { text: 'Reviews' }, { text: 'Downloads' }
    ],
    sortOrder: true,
  };
  constructor(
    private projectDialog: ProjectDialogService,
    private popoverService: AppPopoverService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
    this.checkRouteParams();
    this.getData();
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
      this.header = "University of Gujrat's Projects";
    }
    else {
      this.header = "Global Projects";
    }
  }
  openProjectDialog() {
    this.projectDialog.open();
  }
  handleSearchInput(event: any) {
  }

}
