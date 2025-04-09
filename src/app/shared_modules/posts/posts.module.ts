import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostItemComponent } from './post-item/post-item.component';
import { CommentInputComponent } from './comments/comment-input/comment-input.component';
import { PostsListItemComponent } from './posts-list/posts-list-item/posts-list-item.component';
import { PostReactionsComponent } from './post-item/post-reactions/post-reactions.component';
import { PostItemPopupComponent } from './post-item-popup/post-item-popup.component';
import { SharedModule } from '../../shared/shared.module';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { VideosListItemComponent } from './videos-list/videos-list-item/videos-list-item.component';
import { ImagesListItemComponent } from './images-list/images-list-item/images-list-item.component';

@NgModule({
  declarations: [
    PostItemComponent,
    CommentInputComponent,
    PostsListItemComponent, CommentItemComponent,
    PostReactionsComponent, PostItemPopupComponent, VideosListComponent, ImagesListComponent,
    PostsListComponent, ImagesListItemComponent,
    VideosListItemComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  entryComponents: [PostItemPopupComponent],
  exports: [
    PostItemComponent, CommentInputComponent,
    PostsListItemComponent, CommentItemComponent,
    PostReactionsComponent, PostItemPopupComponent,
    VideosListComponent, ImagesListComponent, PostsListComponent,
    VideosListItemComponent, ImagesListItemComponent
  ]
})
export class PostsModule { }
