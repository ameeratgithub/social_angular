import { Injectable, Injector, InjectionToken, Inject } from '@angular/core';
import { OverlayRef, PositionStrategy, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

export const PORTAL_DATA = new InjectionToken<any>('PortalData');

@Injectable({
  providedIn: 'root'
})
export class AppOverlayService {
  overlayRef: OverlayRef;
  positionStrategy: PositionStrategy;
  componentPopupPortal: ComponentPortal<any>;
  constructor(
    private overlay: Overlay, private injector: Injector
  ) {
  }
  getSideNav(): HTMLElement {
    return document.querySelectorAll('.mat-sidenav-content')[0] as HTMLDivElement;

  }
  createOverlay() {
    this.getSideNav().style.overflow = 'hidden';
    this.overlayRef = this.overlay.create(this.getOverlayConfiguration());

    // this.overlayRef.backdropClick().subscribe(() => {
    //   this.overlayRef.detach();
    //   console.log("Clicked");
    //   this.getSideNav().style.overflow = 'auto';
    // });
  }
  getOverlayConfiguration() {
    return new OverlayConfig({
      hasBackdrop: true,

      disposeOnNavigation: true,
      positionStrategy: this.getOverlayPosition(),
      scrollStrategy: this.overlay.scrollStrategies.noop(),
    });
  }
  getInjector(data: any): PortalInjector {
    const injectorTokens = new WeakMap<any, any>([
      [PORTAL_DATA, data]
    ]);
    return new PortalInjector(this.injector, injectorTokens);
  }
  getOverlayPosition(): PositionStrategy {
    this.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    // .connectedTo(this.imgRef,
    //   { originX: 'start', originY: 'bottom' },
    //   { overlayX: 'start', overlayY: 'bottom' });
    return this.positionStrategy;
  }
  close() {
    this.overlayRef.detach();
  }
  open(component: any, data?: any) {
    this.createOverlay();
    this.componentPopupPortal = new ComponentPortal(component, null, this.getInjector(data));
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.componentPopupPortal);
      this.overlayRef.hostElement.onclick = () => {
        this.overlayRef.detach();
        this.getSideNav().style.overflow = 'auto';
      }
    } else {
      this.overlayRef.detach();
    }
  }
}
