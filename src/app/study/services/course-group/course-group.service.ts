import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseGroup } from '../../../models/study/course-group';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseGroupService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<CourseGroup[]> {
    return this.http.get('api/coursegroups').pipe(
      map(response => response as CourseGroup[])
    );
  }
}
