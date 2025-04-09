import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  searchLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router
  ) {
    this.searchLinks = [
      { label: 'All', link: './', index: 0 }, { label: 'People', link: './people', index: 1 },
      { label: 'Posts', link: './posts', index: 2 }, { label: 'Pictures', link: './pictures', index: 3 },
      { label: 'Videos', link: './videos', index: 4 }, { label: 'Questions', link: './questions', index: 5 },
      { label: 'Universities', link: './universities', index: 6 },
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
