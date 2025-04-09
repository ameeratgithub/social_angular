import { Component, OnInit } from '@angular/core';
import { EditSectionDialogComponent } from './edit-section-dialog/edit-section-dialog.component';
import { SectionService } from '../services/section/section.service';
import { Announcement } from '../../models/study/announcement';
import { Section } from '../../models/study/section';
import { NumberOrdinalPipe } from 'src/app/shared/pipes/number-ordinal.pipe';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';
import { TreeNode } from '../tree-wrapper/tree/tree.component';
import { TreeService } from '../tree-wrapper/tree/tree.service';

@Component({
  selector: 'study-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  loading = false;
  announcements: Announcement[];
  section: Section;
  semestersTree: TreeNode[];
  constructor(
    private dialogService: AppDialogService, private sectionService: SectionService,
    private treeService: TreeService, private numberOrdinalPipe: NumberOrdinalPipe,
    public loaderService: ComponentLoaderService
  ) { }

  changeDatesheet() {
    console.log('Change Datesheet...!');
  }
  changeTimetable() {
    console.log('Change Timetable...!');
  }
  ngOnInit() {
    this.loaderService.loader(this.sectionService.getData(), (res: Section) => {
      this.section = res;
      let tempTree = this.treeService.makeTree(this.section.semesters, 2, '/study/courses/{var}');
      tempTree = tempTree.map(item => {
        item.name = this.numberOrdinalPipe.transform(item.number);
        return item;
      });
      this.semestersTree = tempTree;
    });
  }
  openEditSectionDialog() {
    const dialogRef = this.dialogService.openDialog(EditSectionDialogComponent,
      { width: '500px', position: { top: '2%' } }
    );
  }

}
