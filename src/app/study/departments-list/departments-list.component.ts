import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department/department.service';
import { Announcement } from '../../models/study/announcement';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';
import { TreeNode } from '../tree-wrapper/tree/tree.component';
import { TreeService } from '../tree-wrapper/tree/tree.service';

@Component({
  selector: 'departments-list',
  templateUrl: './departments-list.component.html',
  styles: []
})
export class DepartmentsListComponent implements OnInit {

  departmentTree: TreeNode[];
  announcements: Announcement[];
  constructor(
    private departmentService: DepartmentService,
    private treeService: TreeService,
    public loaderService: ComponentLoaderService
  ) {
  }
  ngOnInit() {
    this.loaderService.loader(this.departmentService.getAll(), res => {
      const tempTree = this.treeService.makeTree(res, 3, '/study/sections/{var}');
      const actions = [
        { text: 'Questions', url: '/blog/questions', queryParams: '{"area":"department","id":"{var}"}', icon: 'question_answer' },
      ];
      this.departmentTree = this.treeService.addLinks(tempTree, actions);
    });
    this.loaderService.loader(this.departmentService.getAnnouncements(), res => {
      this.announcements = res;
    });
  }
}
