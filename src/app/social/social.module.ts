import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PostsModule } from '../shared_modules/posts/posts.module';
import { SocialRoutingModule } from './social-routing.module';

import { WallComponent } from './wall/wall.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UserSuggestionsComponent } from './wall/user-suggestions/user-suggestions.component';
import { SuggestionItemComponent } from './wall/user-suggestions/suggestion-item/suggestion-item.component';
import { SocialChatComponent } from './wall/social-chat/social-chat.component';
// import { ChatSectionComponent } from '../shared/social-chat/chat-section/chat-section.component';
import { ChatItemComponent } from './wall/social-chat/chat-item/chat-item.component';
import { WallPostsComponent } from './wall/wall-posts/wall-posts.component';
import { CampusWallComponent } from './wall/campus-wall/campus-wall.component';
import { CampusWallHeaderComponent } from './wall/campus-wall/campus-wall-header/campus-wall-header.component';
import { ChatSectionComponent } from './wall/social-chat/chat-section/chat-section.component';
import { GroupChatItemComponent } from './wall/social-chat/group-chat-item/group-chat-item.component';
// import { GroupChatItemComponent } from './wall/social-chat/group-chat-item/group-chat-item.component';


@NgModule({
  declarations: [
    WallComponent, AddPostComponent,
    UserSuggestionsComponent, SuggestionItemComponent, SocialChatComponent,
    ChatSectionComponent,
    ChatItemComponent,
    WallPostsComponent, CampusWallComponent, CampusWallHeaderComponent,
    GroupChatItemComponent,
  ],
  imports: [
    CommonModule, SharedModule, PostsModule, SocialRoutingModule
  ],
})
export class SocialModule { }
