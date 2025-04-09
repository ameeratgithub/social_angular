import { Component, OnInit, Input } from '@angular/core';
import { CourseFilesDialogService } from './course-files-dialog.service';
import { Observable, of } from 'rxjs';
import { CourseFile } from 'src/app/models/study/course-file';
import { CourseFileService } from 'src/app/study/services/course-file/course-file.service';
import { MatDialogRef } from '@angular/material';
import { ConfirmationDialogService } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'files-wrapper',
  templateUrl: './files-wrapper.component.html',
  styleUrls: ['./files-wrapper.component.scss']
})
export class FilesWrapperComponent implements OnInit {

  @Input() header: string;
  @Input() order: number;
  files: CourseFile[];
  constructor(
    private fileDialogService: CourseFilesDialogService,
    private courseFileService: CourseFileService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit() {
    this.getAllFiles();
  }
  getAllFiles() {
    this.courseFileService.getAll().subscribe(res => {
      this.files = res;
    });
  }
  openAddFileDialog(action: string, file: CourseFile) {
    const dialogRef = this.fileDialogService.openDialog(this.header, action, file);
    const instance = dialogRef.componentInstance;
    instance.save.subscribe(res => {
      if (res.action === 'add') {
        const observable = this.courseFileService.add(res.files as CourseFile[]);
        this.performAction(instance, dialogRef, observable, (r: CourseFile[]) => {
          delete r['id'];
          this.files = this.files.concat(r);
        });
      } else if (res.action === 'edit') {
        const observable = this.courseFileService.update(res.files[0] as CourseFile);
        this.performAction(instance, dialogRef, observable, (r: CourseFile) => {
        });
      }
    });
  }

  performAction(instance: any, dialogRef: MatDialogRef<any>, observable: Observable<any>, callback: Function) {
    instance.loading = true;
    const subscription = observable.subscribe(r => {
      callback(r);
      dialogRef.close();
    },
      () => instance.error = 'Something went wrong. Please try again.'
    );
    subscription.add(() => instance.loading = false);
  }
  removeFile(file: CourseFile) {
    const dialogRef = this.confirmationDialogService.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = 'Do you really want to delete file?';
    instance.confirmed.subscribe(() => {
      this.files = this.files.filter(f => f.id !== file.id);
      dialogRef.close();
    });
  }
}
