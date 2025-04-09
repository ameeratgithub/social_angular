import { Component, OnInit } from '@angular/core';
import { SelectedOption } from '../../component-search/component-search.component';

@Component({
  selector: 'reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

  filters: SelectedOption[] = [
    { text: 'All', selected: true }, { text: '5', icon: 'star' }, { text: '4', icon: 'star' }, { text: '3', icon: 'star' },
    { text: '2', icon: 'star' }, { text: '1', icon: 'star' }
  ];
  constructor() { }

  ngOnInit() {
  }
  filterOptionChanged(option: SelectedOption) {
    this.filters = this.filters.map(s => {
      s.selected = false;
      return s;
    });
    option.selected = true;
  }

}
