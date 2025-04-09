import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { AppPopoverService } from '../app-popover/app-popover.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;
  constructor(
    private router: Router,
    private popoverService: AppPopoverService
    ) { }

  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
  }
  search(searchTerm: string) {
    if (searchTerm.trim()) {
      this.router.navigate(['search', searchTerm]);
    }
  }
}
