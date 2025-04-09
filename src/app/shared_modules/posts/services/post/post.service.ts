import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/social/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get(`api/posts`).pipe(
      map(response => response as Post[])
    );
  }
  getImagePosts(): Observable<Post[]> {
    return this.getPosts().pipe(
      map((posts: Post[]) => posts.filter(
        post => (post.album && post.album.type === 'images') || (post.media && post.media.type === 'image')
      )
      )
    );
  }
  getVideoPosts(): Observable<Post[]> {
    return this.getPosts().pipe(
      map((posts: Post[]) => posts.filter(
        post => (post.album && post.album.type === 'videos') || (post.media && post.media.type === 'video')
      )
      )
    );
  }
  getComments(postId: string): Observable<Comment[]> {
    return this.http.get(`api/comments`).pipe(
      map(response => response as Comment[])
    );
  }
}
