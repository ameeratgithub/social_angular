import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/models/study/university';
import { UniversityService } from 'src/app/shared_modules/universities-list/services/university/university.service';

@Component({
  selector: 'search-universities',
  templateUrl: './search-universities.component.html',
  styleUrls: ['./search-universities.component.scss']
})
export class SearchUniversitiesComponent implements OnInit {

  isLoading = true;
  universities: University[];
  constructor(
    private universityService: UniversityService
    
  ) {
  }
  ngOnInit() {
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

}
