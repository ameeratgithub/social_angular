import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentComponent implements OnInit {

  searchLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router
  ) {
    this.searchLinks = [
      { label: 'Posts', link: './', index: 0 }, { label: 'Questions', link: './questions', index: 1 },
      { label: 'Books', link: './books', index: 2 }, { label: 'Projects', link: './projects', index: 3 },
    ]
  }

  ngOnInit() {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.searchLinks.indexOf(
        this.searchLinks.find(tab => tab.link === '.' + this.router.url)
      );
    })
  }

}
