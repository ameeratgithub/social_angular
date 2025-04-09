import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { University } from 'src/app/models/study/university';
import { SortService } from 'src/app/shared/services/sort.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient, private sortService: SortService) { }
  getAll(): Observable<University[]> {
    return this.http.get(`api/universities`).pipe(
      map(response => response as University[])
    );
  }
  search(term: string) {
    return this.http.get(`api/universities/?name=${term}`).pipe(
      map(response => response as University[])
    );
  }
  getCampuses() {
  }
  getSortedUniversities(sortBy: string, order: string) {
    return this.sortService.sort(this.getAll(), sortBy, order);
  }
}
