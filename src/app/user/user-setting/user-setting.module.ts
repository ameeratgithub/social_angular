import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserSettingRoutingModule } from './user-setting-routing.module';
import { UserSettingComponent } from './user-setting.component';
import { ChangeProfilePictureComponent } from './change-profile-picture/change-profile-picture.component';
import { EditGeneralInfoComponent } from './edit-general-info/edit-general-info.component';
import { EditSocialSettingComponent } from './edit-social-setting/edit-social-setting.component';
import { EditBlogSettingComponent } from './edit-blog-setting/edit-blog-setting.component';
import { EditStudySettingComponent } from './edit-study-setting/edit-study-setting.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditSectionWrapperComponent } from './edit-section-wrapper/edit-section-wrapper.component';
import { EditPrivacySettingComponent } from './edit-privacy-setting/edit-privacy-setting.component';
import { EditNotificationsSettingComponent } from './edit-notifications-setting/edit-notifications-setting.component';
import { UserSettingSwitchComponent } from './user-setting-switch/user-setting-switch.component';


@NgModule({
  declarations: [
    UserSettingComponent,
    ChangeProfilePictureComponent, EditGeneralInfoComponent, EditSocialSettingComponent,
    EditBlogSettingComponent, EditStudySettingComponent, ChangePasswordComponent, EditSectionWrapperComponent,
    EditPrivacySettingComponent, EditNotificationsSettingComponent, UserSettingSwitchComponent
  ],
  imports: [
    CommonModule,
    UserSettingRoutingModule,
    SharedModule
  ]
})
export class UserSettingModule { }
