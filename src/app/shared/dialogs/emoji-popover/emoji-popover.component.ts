import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { EmojiService } from 'src/app/shared/services/emoji/emoji.service';
import { EmojiCategory } from 'src/app/models/social/emoji-category';
import { Emoji } from 'src/app/models/social/emoji';
import { EmojiNamePipe } from '../../pipes/emoji-name.pipe';

@Component({
  selector: 'emoji-popover',
  templateUrl: './emoji-popover.component.html',
  styleUrls: ['./emoji-popover.component.scss']
})
export class EmojiPopoverComponent implements OnInit {

  @Input() position: ConnectionPositionPair;
  @Input() arrow: string;
  @Output() clicked = new EventEmitter();
  loading = false;
  categories: EmojiCategory[];
  emojis: Emoji[];
  recentCategory: EmojiCategory;
  selectedCategory: EmojiCategory;



  constructor(
    private emojiService: EmojiService,
    private emojiPipe: EmojiNamePipe
  ) { }

  ngOnInit() {
    this.emojiService.categories.subscribe(res => {
      this.recentCategory = res[0];
      res[1].selected = true;
      this.getEmojis(res[1]);
      this.categories = res;
    });
  }
  private getEmojis(c: EmojiCategory) {
    this.selectedCategory = c;
    this.loading = true;
    this.emojiService.getEmojis(c).subscribe((res) => {
      this.loading = false;
      this.emojis = res;
    });
  }
  getCategoryPath(c: EmojiCategory) {
    return 'assets/emojis/16/' + this.emojiPipe.transform(c.icon);
  }
  getEmojiPath(e: Emoji) {
    return 'assets/emojis/32/' + this.emojiPipe.transform(e.shortname);
  }
  appendEmoji(e: Emoji) {
    this.emojiService.addRecentEmoji(this.recentCategory, e);
    this.clicked.emit(e);
  }
  private selectCategory(c: EmojiCategory) {
    this.categories = this.categories.map(cat => {
      cat.selected = false;
      return cat;
    });
    c.selected = true;
    this.getEmojis(c);
  }

}
