import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { Image } from 'src/app/shared/services/media/image';
import { Video } from 'src/app/shared/services/media/video';

@Component({
  selector: 'project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {

  tagControl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];

  @ViewChild('tagAuto') tagAuto: MatAutocomplete;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsSource: string[];
  images: Image[] = [];
  videos: Video[] = [];
  constructor() { }

  ngOnInit() {
    this.tagsSource = [
      'tag1', 'tag-number-2', 'tag-3', 'tag-number-4', 'tag5', 'tag-number-6', 'tag1', 'tag-number-7',
      'tag2131', 'tag-number-112', 'tag13', 'tag-number-12', 'tag-10', 'tag-number-8'
    ];
    this.filteredTags = this.tagControl.valueChanges.pipe(
      startWith(''),
      map((t: string | null) => t ? this.filterTags(t) : this.tagsSource.slice())
    );
  }
  addTagChip(event: MatChipInputEvent): void {
    if (!this.tagAuto.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        if (this.tagsSource.indexOf(value) > -1) {
          this.tags.push(value);
        }
      }
      if (input) {
        input.value = '';
      }
      this.tagControl.setValue(null);
    }
  }
  tagSelected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.value);
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue('');
  }
  removeMemberChip(m: any) {
    const index = this.tags.indexOf(m);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  private filterTags(value: string) {
    const filterValue = value.toLowerCase();
    return this.tagsSource.filter(t => t.toLowerCase().indexOf(filterValue) > -1);
  }
  handleImages(images: FileList) {
    for (let i = 0; i < images.length; i++) {
      this.images.push(this.transformToImage(images[i]));
    }
  }
  handleVideos(videos: FileList) {
    for (let i = 0; i < videos.length; i++) {
      this.videos.push(this.transformToVideo(videos[i]));
    }
  }
  removeImage(image: Image) {
    this.images = this.images.filter(i => i.fileName !== image.fileName);
  }
  removeVideo(video: Video) {
    this.videos = this.videos.filter(v => v.fileName !== video.fileName);
  }
  transformToImage(file: File): Image {
    const image = new Image();
    image.fileName = file.name;
    return image;
  }
  transformToVideo(file: File): Video {
    const video = new Video();
    video.fileName = file.name;
    return video;
  }
}
