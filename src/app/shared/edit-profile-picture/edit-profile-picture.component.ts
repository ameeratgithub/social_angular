import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-profile-picture',
  templateUrl: './edit-profile-picture.component.html',
  styleUrls: ['./edit-profile-picture.component.scss']
})
export class EditProfilePictureComponent implements OnInit {

  pictureUrl: any = 'assets/images/empty.png';
  constructor() { }
  ngOnInit() {
  }
  pictureChanged(event) {
    const picture = event.target.files[0];
    if (picture) {
      const reader = new FileReader();
      reader.onload = e => this.pictureUrl = (<FileReader>e.target).result;
      reader.readAsDataURL(picture);
    }
  }
}
