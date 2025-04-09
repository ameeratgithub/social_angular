import { Component, OnInit, Input, HostBinding, OnChanges, SimpleChanges, ContentChild, TemplateRef, } from '@angular/core';

@Component({
  selector: 'component-loader',
  templateUrl: './component-loader.component.html',
  styleUrls: ['./component-loader.component.scss']
})
export class ComponentLoaderComponent implements OnInit {

  @Input() loading: boolean;
  @Input() private data: any;
  @Input() height: number;

  @ContentChild(TemplateRef) contentRef;
  @HostBinding('class.full-width') fullWidth = true;
  constructor() { }

  ngOnInit() {
  }
  private shouldRender(data) {
    return Array.isArray(data) ? data && data.length : data;
  }

}
