import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { Semester } from '../../../models/study/semester';
import { map } from 'rxjs/operators';
import { Announcement } from '../../../models/study/announcement';
import { AnnouncementService } from '../announcement/announcement.service';
import { Section } from '../../../models/study/section';
import { SectionFile } from '../../../models/study/section-file';
import { Student } from '../../../models/study/student';
import { UserService } from 'src/app/core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(
    private http: HttpClient, private announcementService: AnnouncementService,
    private userService: UserService
  ) { }
  getSemesters(): Observable<Semester[]> {
    return this.http.get('api/sectionsemesters').pipe(
      map(res => res as Semester[])
    );
  }
  getAnnouncements(): Observable<Announcement[]> {
    return this.announcementService.getAll();
  }
  getData(): Observable<Section> {
    return forkJoin(this.getSemesters(), this.getAnnouncements()).pipe(
      map(res => {
        const section = new Section();
        section.semesters = res[0];
        section.announcements = res[1];
        const sectionFile = new SectionFile();
        sectionFile.id = 1;
        sectionFile.uploader = new Student();
        sectionFile.uploader.id = 2;
        sectionFile.uploader.rollNumber = '13014198-023';
        sectionFile.uploader.fullName = 'Ameer Hamza';
        sectionFile.uploader.image = 'assets/images/img-5.jpg';
        sectionFile.date = Date.now();
        sectionFile.url = 'assets/images/img-3.jpg';
        section.datesheet = sectionFile;
        section.timetable = sectionFile;
        return section;
      })
    );
  }
  getSectionEditInfo(): Observable<Section> {
    return this.userService.getAll().pipe(
      map(res => {
        const section = new Section();
        section.id = 1;
        section.name = 'Section A';
        section.cr = res[0] as Student;
        section.gr = res[2] as Student;
        section.members = res as Student[];
        section.currentSemester = { id: 1, number: 5 } as Semester;
        return section;
      })
    );
  }
}
