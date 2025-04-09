import { Component, OnInit } from '@angular/core';

import { CampusService } from '../services/campus/campus.service';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';

import { TreeService } from '../tree-wrapper/tree/tree.service';
import { TreeNode } from '../tree-wrapper/tree/tree.component';
@Component({
  selector: 'campuses-list',
  templateUrl: './campuses-list.component.html',
  styles: []
})
export class CampusesListComponent implements OnInit {
  campusTree: TreeNode[];
  constructor(
    private treeService: TreeService,
    private campusService: CampusService,
    public loaderService: ComponentLoaderService
  ) { }
  ngOnInit() {
    this.loaderService.loader(this.campusService.getAll(), res => {
      const tempTree = this.treeService.makeTree(res, 3, '/study/programs/{var}/departments');
      const actions = [
        { text: 'Wall', url: '/wall', queryParams: '{"cid":"{var}"}', icon: 'people' },
        { text: 'Questions', url: '/blog/questions', queryParams: '{"area":"campus","id":"{var}"}', icon: 'question_answer' },
      ];
      this.campusTree = this.treeService.addLinks(tempTree, actions);
    });
  }

}
