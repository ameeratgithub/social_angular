import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseFile } from '../../../models/study/course-file';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseFileService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<CourseFile[]> {
    return this.http.get('api/coursefiles').pipe(
      map(response => response as CourseFile[])
    );
  }
  add(files: CourseFile[]) {
    return this.http.post('api/coursefiles', files).pipe(
      map(res => res as CourseFile[])
    );
  }
  update(file: CourseFile) {
    return this.http.put('api/coursefiles', file).pipe(
      map(response => response as CourseFile)
    );
  }
}
