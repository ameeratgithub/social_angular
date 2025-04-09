import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[imageSnackbar]',
  exportAs: 'imageSnackbar'
})
export class ImageSnackbarDirective {
  public show: boolean;
  constructor() { }
  @HostListener('mouseenter') showSnackbar() {
    this.show = true;
  }
  @HostListener('mouseleave') hideSnackbar() {
    this.show = false;
  }
}
