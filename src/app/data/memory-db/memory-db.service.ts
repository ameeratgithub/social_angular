import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// For study module
import unisList from '../json/study/universities.json';
import campusesList from '../json/study/campuses.json';
import courseGroupsList from '../json/study/course-groups.json';
import courseFilesList from '../json/study/course-files.json';
import departmentsList from '../json/study/departments.json';
import announcementsList from '../json/study/announcements.json';
import sectionSemestersList from '../json/study/section-semesters.json';
import libraryItem from '../json/study/library.json';
import reviewsList from '../json/study/reviews.json';


// For user module

import usersList from '../json/user/users.json';

// For social module

import emojisList from '../json/social/emojis.json';
import postsList from '../json/social/posts.json'
import commentsList from '../json/social/comments.json'

@Injectable({
  providedIn: 'root'
})
export class MemoryDbService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const universities = unisList;
    const campuses = campusesList;
    const coursegroups = courseGroupsList;
    const coursefiles = courseFilesList;
    const departments = departmentsList;
    const announcements = announcementsList;
    const sectionsemesters = sectionSemestersList;
    const library = libraryItem;
    const reviews = reviewsList;

    const users = usersList;


    const emojis = emojisList;
    const posts = postsList;
    const comments = commentsList;

    return {
      universities, campuses, coursegroups, coursefiles, departments, announcements, sectionsemesters, library,
      reviews


      , users


      , emojis, posts, comments
    };
  }
}
