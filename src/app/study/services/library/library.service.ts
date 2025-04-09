import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Library } from '../../../models/study/library';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }
  getLibrary(): Observable<Library> {
    return this.http.get('api/library').pipe(
      map(res => res as Library)
    );
  }
}
