import { Injectable } from '@angular/core';
import { TreeNode } from './tree.component';


@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private baseUrl?: string;
  convertableArray: string[];
  constructor() { }
  makeTree(inputTree: any, depth: number, baseUrl?: string): TreeNode[] {
    this.baseUrl = baseUrl;
    const tree = this.iterateArray(inputTree, depth);
    return tree;
  }
  addLinks(inputTree: TreeNode[], actions: any[]) {
    return inputTree.map(node => {
      actions = actions.map((a: any) => {
        const params = JSON.parse(a.queryParams.replace('{var}', node.id));
        return { ...a, href: a.url, qParams: params };
      });
      node.actions = actions;
      return node;
    });
  }
  private iterateArray(array: any[], depth: number): TreeNode[] {
    return array.map(el => {
      if (depth === 1) {
        el['isLink'] = true;
        el['href'] = this.baseUrl.replace('{var}', el.id);
      }
      Object.keys(el).map(k => {
        let ce = el[k];
        if (ce instanceof Array) {
          depth--;
          el['children'] = Object.assign([], ce);
          delete el[k];
          ce = el['children'];
          this.iterateArray(ce, depth);
          depth++;
        } else {
          el[k] = ce;
        }
      });
      return el;
    });
  }
}
