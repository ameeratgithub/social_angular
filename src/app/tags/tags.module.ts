import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsListItemComponent } from './tags-list-item/tags-list-item.component';
import { AppTagsComponent } from './app-tags/app-tags.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TagsListComponent, TagsListItemComponent, AppTagsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TagsRoutingModule
  ]
})
export class TagsModule { }
