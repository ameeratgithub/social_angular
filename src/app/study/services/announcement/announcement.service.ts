import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from '../../../models/study/announcement';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Announcement[]> {
    return this.http.get('api/announcements').pipe(
      map(res => res as Announcement[])
    );
  }
}
