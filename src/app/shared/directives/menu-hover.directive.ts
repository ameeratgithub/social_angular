import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[menuHover]',
  exportAs: 'menuHover'
})
export class MenuHoverDirective {

  menuOpened: boolean;
  isCursorIn: boolean;
  public showActions: boolean;
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.showActions = this.isCursorIn = true;
  }
  @HostListener('mouseleave') mouseleave() {
    if (this.menuOpened) {
      this.showActions = true;
    } else {
      this.showActions = false;
    }
    this.isCursorIn = false;
  }
  open() {
    this.menuOpened = true;
  }
  close() {
    this.menuOpened = false;
    setTimeout(() => {
      if (!this.isCursorIn) {
        this.showActions = false;
      }
    }, 100);

  }

}
