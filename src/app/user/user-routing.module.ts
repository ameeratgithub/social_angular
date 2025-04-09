import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' },
    { path: 'setting', loadChildren: './user-setting/user-setting.module#UserSettingModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
