import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class SelectedSearchOptions {
  searchTerm: string;
  filter: string;
  sort: string;
  order: string;
}
export class SelectedOption {
  text: string;
  icon?: string;
  selected?: boolean;
  isAscending?: boolean;
}
export class SearchOptions {
  filterOptions: SelectedOption[];
  sortOptions?: SelectedOption[];
  sortOrder?: boolean;
}

@Component({
  selector: 'component-search',
  templateUrl: './component-search.component.html',
  styleUrls: ['./component-search.component.scss'],
})

export class ComponentSearchComponent implements OnInit {

  selectedOptions: SelectedSearchOptions;
  currentIcon: 'arrow_drop_up';

  @Input() width: any;
  @Input() searchData: SearchOptions;
  @Output() changed: EventEmitter<SelectedSearchOptions>;
  constructor() {
    this.changed = new EventEmitter<SelectedSearchOptions>();
    this.selectedOptions = new SelectedSearchOptions();
  }

  ngOnInit() {
    this.initData();
  }
  initData() {
    this.searchData.sortOptions = this.searchData.sortOptions.map(s => {
      s.isAscending = true;
      return s;
    });
  }
  filterOptionChanged(option: SelectedOption) {
    this.searchData.filterOptions = this.deselectItems(this.searchData.filterOptions);
    option.selected = true;
    this.selectedOptions.filter = option.text;
    this.optionChanged(this.selectedOptions);
  }
  sortOptionChanged(option: SelectedOption) {
    if (option.selected) {
      option.isAscending = !option.isAscending;
    }
    this.searchData.sortOptions = this.deselectItems(this.searchData.sortOptions);
    option.selected = true;
    this.selectedOptions.sort = option.text;
    this.orderOptionChanged(option.isAscending);
    this.optionChanged(this.selectedOptions);
  }
  deselectItems(options: SelectedOption[]) {
    return options.map(s => {
      s.selected = false;
      return s;
    });
  }
  orderOptionChanged(isAscending: boolean) {
    this.selectedOptions.order = isAscending ? 'asc' : 'desc';
  }
  search(value: string) {
    this.searchData.filterOptions = this.deselectItems(this.searchData.filterOptions);
    this.selectedOptions.searchTerm = value;
    this.selectedOptions.filter = undefined;
    this.optionChanged(this.selectedOptions);
  }
  optionChanged(options: SelectedSearchOptions) {
    this.changed.emit(options);
  }
}
