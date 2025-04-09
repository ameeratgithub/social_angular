import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-section-wrapper',
  templateUrl: './edit-section-wrapper.component.html',
  styleUrls: ['./edit-section-wrapper.component.scss']
})
export class EditSectionWrapperComponent implements OnInit {

  @Input() header;
  constructor() { }

  ngOnInit() {
  }

}
