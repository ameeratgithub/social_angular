import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
export interface TreeNode {
  id: number;
  name: string;
  number?: number;
  isLink?: boolean;
  href?: string;
  children?: TreeNode[];
  actions: any[];
}
@Component({
  selector: 'core-tree',
  templateUrl: './tree.component.html',
  styles: [`
  .tree-invisible {
    display: none;
  }
  .tree ul,
  .tree li {
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
  }
  .actions{
    position:absolute;
    right:10px;
  }
  `]
})

export class TreeComponent implements OnInit, OnChanges {

  @Input() inline: boolean;
  @Input() treeData: TreeNode[];
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
    this.dataSource.data = this.treeData;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = changes.treeData.currentValue;
  }
}
