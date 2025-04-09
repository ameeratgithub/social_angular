import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourseFile } from 'src/app/models/study/course-file';
import { Student } from 'src/app/models/study/student';


interface TempFile extends File {
  deadline: Date | number;
}

@Component({
  selector: 'course-files-dialog',
  templateUrl: './course-files-dialog.component.html',
  styleUrls: ['./course-files-dialog.component.scss']
})

export class CourseFilesDialogComponent implements OnInit {

  @Input() fileType: string;
  @Input() action: string;
  @Input() file: CourseFile;
  @Input() loading = false;
  @Output() save: EventEmitter<any>;
  files: CourseFile[] = [];
  header: string;
  constructor() {
    this.save = new EventEmitter();
  }

  ngOnInit() {
    this.fileType = this.fileType.slice(0, -1).toLowerCase();
    if (this.action === 'add') {
      this.header = `Add new ${this.fileType}s`;
    } else {
      console.log(this.file);
      this.files.push(this.file);
      this.header = 'Edit ' + this.fileType;
    }
  }
  handleFiles(files: FileList) {
    if (this.action === 'add') {
      for (let i = 0; i < files.length; i++) {
        this.files.push(this.transformFile(files.item(i) as TempFile));
      }
    } else {
      this.files = [];
      this.files.push(this.transformFile(files.item(0) as TempFile));
    }
  }
  private transformFile(file: TempFile) {
    const courseFile = new CourseFile();
    courseFile.id = 4;
    courseFile.name = file.name;
    courseFile.size = file.size;
    courseFile.date = Date.now();
    courseFile.deadline = file.deadline;
    courseFile.uploader = {
      id: 1,
      fullName: 'Ameer Hamza',
      image: 'assets/images/img-3.jpg',
      rollNumber: '13014198-023'
    } as Student;
    return courseFile;
  }
  removeFile(file: TempFile) {
    this.files = this.files.filter(f => f.name !== file.name);
  }
  saveFile() {
    this.save.emit({ fileType: this.fileType, action: this.action, files: this.files });
  }

}
