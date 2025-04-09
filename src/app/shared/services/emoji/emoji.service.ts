import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmojiCategory } from '../../../models/social/emoji-category';
import { map, shareReplay } from 'rxjs/operators';
import { Emoji } from '../../../models/social/emoji';

@Injectable({
  providedIn: 'root'
})

export class EmojiService {
  private categories$: Observable<EmojiCategory[]>;
  private emojis$: Observable<Emoji[]>;
  private m: Map<EmojiCategory, Observable<Emoji[]>>;
  constructor(
    private http: HttpClient
  ) {
    this.m = new Map<EmojiCategory, Observable<Emoji[]>>();
  }
  get categories(): Observable<EmojiCategory[]> {
    if (!this.categories$) {
      this.categories$ = this.getEmojiCategories$().pipe(
        shareReplay(1)
      );
    }
    return this.categories$;
  }
  addRecentEmoji(c: EmojiCategory, e: Emoji) {
    let recentEmojis = this.m.get(c);
    if (!recentEmojis) {
      this.m.set(c, of([]));
      recentEmojis = this.m.get(c);
    }
    recentEmojis = recentEmojis.pipe(
      map(res => {
        res.unshift(e);
        res = res.filter((item, index) => res.indexOf(item) === index);
        return res;
      })
    );
    this.m.set(c, recentEmojis);
  }
  getEmojis(c: EmojiCategory): Observable<Emoji[]> {
    if (!this.m.get(c)) {
      this.emojis$ = this.getEmojisByCategory$(c).pipe(
        shareReplay(1)
      );
      this.m.set(c, this.emojis$);
    }
    return this.m.get(c);
  }
  private getEmojiCategories$(): Observable<EmojiCategory[]> {
    return this.http.get('api/emojis').pipe(
      map(res => res as EmojiCategory[])
    );
  }
  private getEmojisByCategory$(c: EmojiCategory): Observable<Emoji[]> {
    return this.http.get(`api/emojis/?name=${c.name}`).pipe(
      map((res: EmojiCategory) => res[0].items as Emoji[])
    );
  }
}
