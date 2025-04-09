import { Component, OnInit, Input } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';

@Component({
  selector: 'users-list-card',
  templateUrl: './users-list-card.component.html',
  styleUrls: ['./users-list-card.component.scss']
})
export class UsersListCardComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;
  searchData: SearchOptions = {
    filterOptions: [
      { text: 'All', selected: true}
    ],
    sortOptions: [{ text: 'Name', selected: true }],
    sortOrder: true,
  };
  users = [
    { fullName: 'Ameer Hamza', image: 'assets/images/img-3.jpg' },
    { fullName: 'Usama Azad', image: 'assets/images/img-1.jpg' },
    { fullName: 'Ali Rabbani', image: 'assets/images/img-8.jpg' },
    { fullName: 'Luqman Yasir', image: 'assets/images/img-4.jpg' },
    { fullName: 'Ibraheem Mubashar', image: 'assets/images/img-6.jpg' },
  ];
  constructor(
    private popoverService: AppPopoverService
  ) {
    this.popoverPosition = this.popoverService.getTopRightPosition();
  }

  ngOnInit() {
  }
  handleSearchInput(event){
    
  }

}
