import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { CampusWallComponent } from './wall/campus-wall/campus-wall.component';

const routes: Routes = [
  { path: '', component: WallComponent },
  { path: 'wall', component: CampusWallComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
