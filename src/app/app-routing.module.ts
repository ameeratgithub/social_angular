import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  

  /*         For Study Module        */

  { path: 'study', loadChildren: './study/study.module#StudyModule' },

  /*         For Blog Module         */

  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },

  /*         For Search Module       */

  { path: 'search/:term', loadChildren: './search/search.module#SearchModule' },

  /*        For Tags Module          */

  { path: 'tags', loadChildren: './tags/tags.module#TagsModule' },

  /*         For User Module         */

  { path: 'user', loadChildren: './user/user.module#UserModule' },
    
  /*         For Social Module       */

  { path: '', loadChildren: './social/social.module#SocialModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
