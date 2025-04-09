import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {
  users = [
    { fullName: 'Ameer Hamza', image: 'assets/images/img-3.jpg' },
    { fullName: 'Usama Azad', image: 'assets/images/img-1.jpg' },
    { fullName: 'Ali Rabbani', image: 'assets/images/img-8.jpg' },
    { fullName: 'Luqman Yasir', image: 'assets/images/img-4.jpg' },
    { fullName: 'Ibraheem Mubashar', image: 'assets/images/img-6.jpg' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
