import {
  Component, OnInit, ElementRef, ViewChild, Renderer2, RendererFactory2, Output, EventEmitter,
  Input, OnChanges
} from '@angular/core';
import { Emoji } from 'src/app/models/social/emoji';
import { EmojiNamePipe } from '../pipes/emoji-name.pipe';
import { TributeOptions } from 'tributejs';
import { NgxTributeDirective } from 'ngx-tribute';

interface TributeValue {
  key: string;
  value: string;
  img?: string
}

@Component({
  selector: 'input-contenteditable',
  templateUrl: './input-contenteditable.component.html',
  styleUrls: ['./input-contenteditable.component.scss']
})
export class InputContenteditableComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() initialContent: any;
  isInputEmpty = true;
  isMentioned = false;
  mentionsOptions: TributeOptions<TributeValue>;
  @ViewChild('inputContent') inputContent: ElementRef;
  @ViewChild('tributeDirective') tributeDirective: NgxTributeDirective<TributeValue>;
  @Output() save = new EventEmitter();
  @Output() change = new EventEmitter();
  private renderer: Renderer2;
  private inputElement;
  constructor(
    private rendererFactory: RendererFactory2,
    private emojiNamePipe: EmojiNamePipe
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.initializeMentions();
  }
  ngOnInit() {
    this.inputElement = this.inputContent.nativeElement;
    if (this.type === 'message') {
      this.mentionsOptions = {
        values: []
      };
    }
  }
  ngOnChanges() {
    this.inputElement = this.inputContent.nativeElement;
    this.addInitialContent();
  }
  addInitialContent() {
    if (this.initialContent) {
      this.inputElement.innerHTML = this.initialContent.html + "&nbsp;";
    }
  }
  initializeMentions() {
    this.mentionsOptions = {

      allowSpaces: true,
      values: (text, cb) => {
        cb([]);
        this.loadData(users => cb(users))
      },
    };
    this.mentionsOptions.menuItemTemplate = (item) => {
      return this.createItem(item.original);
    };
    this.mentionsOptions.selectTemplate = (item) => {
      return `
      <a class='mat-link tagged' href="javascript:void(0)" data-id='${item.string}'>
        ${item.original.value}
      </a>`;
    }
  }
  loadData(cb) {
    setTimeout(() => {
      cb(
        [
          { key: 'Ameer Hamza', value: 'Ameer Hamza', img: 'assets/images/img-1.jpg' },
          { key: 'Usama Azad', value: 'Usama Azad', img: 'assets/images/img-2.jpg' },
          { key: 'Shahbaz Shah', value: 'Shahbaz Shah', img: 'assets/images/img-3.jpg' },
          { key: 'Tayyab Javaid', value: 'Tayyab Javaid', img: 'assets/images/img-4.jpg' },
          { key: 'Muhammad Waqas', value: 'Muhammad Waqas', img: 'assets/images/img-5.jpg' },
          { key: 'Abubakar Nawaz', value: 'Abubakar Nawaz', img: 'assets/images/img-6.jpg' },
          { key: 'Luqman Yasir', value: 'Luqman Yasir', img: 'assets/images/img-7.jpg' },
        ]
      );
    }, 500);
  }
  createItem(object: TributeValue) {
    const str = `
    <div class='mention-item'>
      <img src="${object.img}" class="mention-image"/>  
      <span>${object.value}</span>
    </div>
    `;
    return str;
  }
  getData() {
    let content = this.inputElement.innerHTML;
    const whiteSpaceRegex = /^[ &nbsp; ]+|[ &nbsp; ]+$/g;
    const breakLineRegex = /^(<br( \/)?>)+|(<br( \/)?>)+$/g;
    let shouldTrim = whiteSpaceRegex.test(content) || breakLineRegex.test(content);
    while (shouldTrim) {
      content = content.replace(whiteSpaceRegex, "").trim();
      content = content.replace(breakLineRegex, "").trim();
      shouldTrim = whiteSpaceRegex.test(content) || breakLineRegex.test(content);
    }
    if (!content) {
      return;
    }
    const html = this.inputElement.querySelectorAll('.tagged');
    let count = 0;
    html.forEach(element => {
      if (element.textContent.trim()) {
        count++;
      }
    });
    this.save.emit({ content: content, tags: count });
  }

  handleInputText(event: KeyboardEvent) {
    if (event.keyCode == 8) {
      if (this.inputElement.innerHTML.trim() == "<br>") {
        this.inputElement.innerHTML = "";
      }
    }
    if (this.type == 'post') {
      if (event.keyCode == 13) {
        return this.insertBr();
      }
    }
    else {
      if (event.keyCode == 13 && event.shiftKey) {
        return this.insertBr();
      }
      else if (event.keyCode == 13 && !event.shiftKey) {
        if (this.tributeActivated()) {
          return false;
        }
        this.getData();
        this.inputContent.nativeElement.innerHTML = '';
        document.execCommand('insertHTML', false, '');
        return false;
      }
    }
  }
  tributeActivated() {
    return this.tributeDirective.tribute.isActive;
  }
  insertBr() {
    if (this.tributeActivated()) { return false; }
    document.execCommand('insertHTML', false, '<br/><br/>');
    return false;
  }
  inputChanged() {
    const html = this.inputElement.innerHTML.trim();
    this.isInputEmpty = !html || html == "<br>";
    this.change.emit(this.isInputEmpty);
  }

  appendEmoji(size: number, e: Emoji) {
    const name = this.emojiNamePipe.transform(e.shortname);
    const img = this.renderer.createElement('img') as HTMLImageElement;
    img.className = 'post-emoji';
    img.src = `assets/emojis/${size}/${name}`;
    this.inputElement.focus();
    this.pasteEmojiAtCaret(img);
    this.inputChanged();
  }
  pasteEmojiAtCaret(emojiImage) {
    var sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        var el = this.renderer.createElement("div");
        this.renderer.appendChild(el, emojiImage);
        var frag = document.createDocumentFragment(), node, lastNode;
        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
  }
}
