import { Component } from '@angular/core';
import { Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  public isShowingRouteLoadIndicator: boolean;

  constructor(router: Router) {

    this.isShowingRouteLoadIndicator = false;
    let asyncLoadCount = 0;
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          asyncLoadCount++;

        } else if (event instanceof RouteConfigLoadEnd) {
          asyncLoadCount--;
        }
        this.isShowingRouteLoadIndicator = !!asyncLoadCount;

      }
    );

  }
}
