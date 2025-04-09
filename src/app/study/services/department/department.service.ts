import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../../models/study/department';
import { map } from 'rxjs/operators';
import { Announcement } from '../../../models/study/announcement';
import { AnnouncementService } from '../announcement/announcement.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient, private announcementService: AnnouncementService) { }
  getAll(): Observable<Department[]> {
    return this.http.get('api/departments').pipe(
      map(res => res as Department[])
    );
  }
  getAnnouncements(): Observable<Announcement[]> {
    return this.announcementService.getAll();
  }
}
