import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MessageBoxContentComponent } from './message-box/message-box-content/message-box-content.component';
import { MessageBoxHeaderComponent } from './message-box/message-box-header/message-box-header.component';
import { MessageBoxActionComponent } from './message-box/message-box-action/message-box-action.component';
import { ComponentSearchComponent } from './component-search/component-search.component';
import { ImageSnackbarDirective } from './directives/image-snackbar.directive';
import { ListWrapperComponent } from './wrappers/list-wrapper/list-wrapper.component';
import { VotingButtonComponent } from './voting-button/voting-button.component';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { MenuWrapperComponent } from './wrappers/menu-wrapper/menu-wrapper.component';

import { MatVideoModule } from 'mat-video';
import { DetailsItemComponent } from './details-item/details-item.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteVerticalComponent } from './vote-vertical/vote-vertical.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageItemComponent } from './message-box/message-item/message-item.component';
import { AppPopoverComponent } from './app-popover/app-popover.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListItemComponent } from './users-list/user-list-item/user-list-item.component';
import { UsersListDialogComponent } from './users-list/users-list-dialog/users-list-dialog.component';
import { EditProfilePictureComponent } from './edit-profile-picture/edit-profile-picture.component';
import { HintTextComponent } from './hint-text/hint-text.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewItemComponent } from './reviews/reviews-list/review-item/review-item.component';
import { AppDialogService } from './dialogs/app-dialog/app-dialog.service';
import { AppDialogComponent } from './dialogs/app-dialog/app-dialog.component';
import { ReviewsDialogComponent } from './reviews/reviews-dialog/reviews-dialog.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { MediaGalleryPopupComponent } from './media-gallery/media-gallery-popup/media-gallery-popup.component';
import { AppOverlayService } from './services/app-overlay/app-overlay.service';
import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { SortService } from './services/sort.service';
import { ErrorInfoComponent } from './error-info/error-info.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './dialogs/confirmation-dialog/confirmation-dialog.service';

import { NumberOrdinalPipe } from './pipes/number-ordinal.pipe';
import { UsersSelectionListComponent } from './users-list/users-selection-list/users-selection-list.component';
import { UsersListDialogService } from './users-list/users-list-dialog/users-list-dialog.service';
import { MenuHoverDirective } from './directives/menu-hover.directive';
import { ComponentLoaderComponent } from './component-loader/component-loader.component';
import { ComponentLoaderService } from './component-loader/component-loader.service';
import { DisplayRatingComponent } from './rating/display-rating/display-rating.component';
import { TopStudentsComponent } from './users-list/top-students/top-students.component';
import { ProvideReviewDialogComponent } from './reviews/provide-review-dialog/provide-review-dialog.component';
import { EmojiPopoverComponent } from './dialogs/emoji-popover/emoji-popover.component';
import { UniversityAutocompleteFieldComponent } from './input-fields/university-autocomplete-field/university-autocomplete-field.component';
import { CampusSelectFieldComponent } from './input-fields/campus-select-field/campus-select-field.component';
import { TimingSelectFieldComponent } from './input-fields/timing-select-field/timing-select-field.component';
import { DepartmentSelectFieldComponent } from './input-fields/department-select-field/department-select-field.component';
import { SessionSelectFieldComponent } from './input-fields/session-select-field/session-select-field.component';
import { SectionSelectFieldComponent } from './input-fields/section-select-field/section-select-field.component';
import { SemesterSelectFieldComponent } from './input-fields/semester-select-field/semester-select-field.component';
import { CourseSelectFieldComponent } from './input-fields/course-select-field/course-select-field.component';
import { ProgramSelectFieldComponent } from './input-fields/program-select-field/program-select-field.component';
import { UniversityInputDialogComponent } from './dialogs/university-input-dialog/university-input-dialog.component';
import { CampusInputDialogComponent } from './dialogs/campus-input-dialog/campus-input-dialog.component';
import { TimingInputDialogComponent } from './dialogs/timing-input-dialog/timing-input-dialog.component';
import { ProgramInputDialogComponent } from './dialogs/program-input-dialog/program-input-dialog.component';
import { DepartmentInputDialogComponent } from './dialogs/department-input-dialog/department-input-dialog.component';
import { SessionInputDialogComponent } from './dialogs/session-input-dialog/session-input-dialog.component';
import { SectionInputDialogComponent } from './dialogs/section-input-dialog/section-input-dialog.component';
import { SemesterInputDialogComponent } from './dialogs/semester-input-dialog/semester-input-dialog.component';
import { CourseInputDialogComponent } from './dialogs/course-input-dialog/course-input-dialog.component';
import { UniversityInputDialogService } from './dialogs/university-input-dialog/university-input-dialog.service';
import { CampusInputDialogService } from './dialogs/campus-input-dialog/campus-input-dialog.service';
import { TimingInputDialogService } from './dialogs/timing-input-dialog/timing-input-dialog.service';
import { ProgramInputDialogService } from './dialogs/program-input-dialog/program-input-dialog.service';
import { DepartmentInputDialogService } from './dialogs/department-input-dialog/department-input-dialog.service';
import { SessionInputDialogService } from './dialogs/session-input-dialog/session-input-dialog.service';
import { SectionInputDialogService } from './dialogs/section-input-dialog/section-input-dialog.service';
import { SemesterInputDialogService } from './dialogs/semester-input-dialog/semester-input-dialog.service';
import { CourseInputDialogService } from './dialogs/course-input-dialog/course-input-dialog.service';
import { AppPopoverService } from './app-popover/app-popover.service';
import { EmojiNamePipe } from './pipes/emoji-name.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { InputContenteditableComponent } from './input-contenteditable/input-contenteditable.component';
import { NgxTributeModule } from 'ngx-tribute';
import { PageLayoutWrapperComponent } from './wrappers/page-layout-wrapper/page-layout-wrapper.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { AbsoluteDatePipe } from './pipes/absolute-date.pipe';
import { MediaThumbnailComponent } from './media/media-thumbnail/media-thumbnail.component';
import { MediaThumbnailService } from './media/media-thumbnail/media-thumbnail.service';
import { UsersListCardComponent } from './searchables/users-list-card/users-list-card.component';
import { EmojiService } from './services/emoji/emoji.service';
import { AbsoluteTimePipe } from './pipes/absolute-time.pipe';
import { NotificationItemComponent } from './notifications/notification-item/notification-item.component';
import { ProfileImageAvatarComponent } from './media/profile-image-avatar/profile-image-avatar.component';


let components: any = [
  MessageBoxHeaderComponent, MessageBoxContentComponent, MessageBoxActionComponent, ComponentSearchComponent,
  ImageSnackbarDirective,
  ListWrapperComponent, VotingButtonComponent, NumberSuffixPipe, TruncatePipe, MenuWrapperComponent,
  DetailsItemComponent, VoteVerticalComponent, MessageBoxComponent, MessageItemComponent, AppPopoverComponent,
  UsersListComponent, UserListItemComponent, EditProfilePictureComponent, HintTextComponent, ReviewsListComponent,
  ReviewItemComponent, AppDialogComponent, MediaGalleryComponent,
  AppSpinnerComponent, ErrorInfoComponent,
  NumberOrdinalPipe, UsersSelectionListComponent, MenuHoverDirective, ComponentLoaderComponent,
  DisplayRatingComponent, TopStudentsComponent, EmojiPopoverComponent, UniversityAutocompleteFieldComponent,
  CampusSelectFieldComponent, TimingSelectFieldComponent, DepartmentSelectFieldComponent,
  SessionSelectFieldComponent, SectionSelectFieldComponent, SemesterSelectFieldComponent, CourseSelectFieldComponent,
  ProgramSelectFieldComponent, EmojiNamePipe, SanitizeHtmlPipe, InputContenteditableComponent, PageLayoutWrapperComponent,
  RelativeTimePipe, AbsoluteDatePipe, MediaThumbnailComponent,
  UsersListCardComponent, AbsoluteTimePipe, NotificationItemComponent,

  UsersListDialogComponent, ReviewsDialogComponent, MediaGalleryPopupComponent, ConfirmationDialogComponent,
  ProvideReviewDialogComponent, UniversityInputDialogComponent, CampusInputDialogComponent, TimingInputDialogComponent,
  ProgramInputDialogComponent, DepartmentInputDialogComponent, SessionInputDialogComponent, SectionInputDialogComponent,
  SemesterInputDialogComponent, CourseInputDialogComponent, ProfileImageAvatarComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule, FlexLayoutModule, ReactiveFormsModule, RouterModule, MaterialModule, OverlayModule,
    MatVideoModule, NgxTributeModule
  ],
  exports: [
    CommonModule, FlexLayoutModule, ReactiveFormsModule, MaterialModule, OverlayModule, RouterModule,
    MatVideoModule,

    MessageBoxHeaderComponent, MessageBoxContentComponent, MessageBoxActionComponent, ComponentSearchComponent,
    ImageSnackbarDirective,
    ListWrapperComponent, VotingButtonComponent, NumberSuffixPipe, TruncatePipe, MenuWrapperComponent,
    DetailsItemComponent, VoteVerticalComponent, MessageBoxComponent, MessageItemComponent, AppPopoverComponent,
    UsersListComponent, UserListItemComponent, EditProfilePictureComponent, HintTextComponent, ReviewsListComponent,
    ReviewItemComponent, AppDialogComponent, MediaGalleryComponent, AppSpinnerComponent, ErrorInfoComponent,
    NumberOrdinalPipe, UsersSelectionListComponent, MenuHoverDirective, ComponentLoaderComponent,
    DisplayRatingComponent, TopStudentsComponent, EmojiPopoverComponent, UniversityAutocompleteFieldComponent,
    CampusSelectFieldComponent, TimingSelectFieldComponent, DepartmentSelectFieldComponent,
    SessionSelectFieldComponent, SectionSelectFieldComponent, SemesterSelectFieldComponent,
    CourseSelectFieldComponent, ProgramSelectFieldComponent, EmojiNamePipe, SanitizeHtmlPipe,
    InputContenteditableComponent, PageLayoutWrapperComponent, RelativeTimePipe, AbsoluteDatePipe,
    MediaThumbnailComponent, UsersListCardComponent, AbsoluteTimePipe, NotificationItemComponent,

    UsersListDialogComponent, ReviewsDialogComponent, MediaGalleryPopupComponent, ConfirmationDialogComponent,
    ProvideReviewDialogComponent, UniversityInputDialogComponent, CampusInputDialogComponent, TimingInputDialogComponent,
    ProgramInputDialogComponent, DepartmentInputDialogComponent, SessionInputDialogComponent, SectionInputDialogComponent,
    SemesterInputDialogComponent, CourseInputDialogComponent, ProfileImageAvatarComponent
  ],
  providers: [
    AppPopoverService, EmojiService,
    AppDialogService, AppOverlayService, SortService, ConfirmationDialogService,
    NumberOrdinalPipe, UsersListDialogService, ComponentLoaderService, UniversityInputDialogService,
    CampusInputDialogService, TimingInputDialogService, ProgramInputDialogService, DepartmentInputDialogService,
    SessionInputDialogService, SectionInputDialogService, SemesterInputDialogService, CourseInputDialogService,
    EmojiNamePipe, MediaThumbnailService
  ],
  entryComponents: [
    UsersListDialogComponent, ReviewsDialogComponent, MediaGalleryPopupComponent, ConfirmationDialogComponent,
    ProvideReviewDialogComponent, UniversityInputDialogComponent, CampusInputDialogComponent, TimingInputDialogComponent,
    ProgramInputDialogComponent, DepartmentInputDialogComponent, SessionInputDialogComponent, SectionInputDialogComponent,
    SemesterInputDialogComponent, CourseInputDialogComponent
  ]
})
export class SharedModule { }
