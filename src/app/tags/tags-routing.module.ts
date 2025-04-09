import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTagsComponent } from './app-tags/app-tags.component';

const routes: Routes = [
  { path: '', component: AppTagsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
