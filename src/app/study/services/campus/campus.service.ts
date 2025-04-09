import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../../../models/study/campus';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Campus[]> {
    return this.http.get('api/campuses').pipe(
      map(res => res as Campus[])
    );
  }
}
