import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.scss']
})
export class BlogInputComponent implements OnInit {

  @Input() type;
  questionForm: FormGroup;
  tagControl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: any[] = [{ id: 3, name: 'tag-3', count: 300 }];
  filteredTags: Observable<any[]>;
  allTags: any[] = [
    { id: 1, name: 'tag-1', count: 100 },
    { id: 2, name: 'tag-2', count: 200 },
    { id: 3, name: 'tag-3', count: 300 },
    { id: 4, name: 'tag-4', count: 400 },
    { id: 5, name: 'tag-5', count: 500 },
    { id: 6, name: 'tag-6', count: 600 },
    { id: 7, name: 'tag-7', count: 700 },
    { id: 8, name: 'tag-8', count: 800 },
  ];

  mceConfig = {
    resize: false,
    height: 300,
    branding: false,
    plugins: 'preview placeholder link textcolor lists hr table',
    toolbar: `formatselect | bold italic strikethrough forecolor backcolor | link | 
    alignleft aligncenter alignright alignjustify  | numlist bullist | outdent indent  | removeformat`
  };
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('tagAutocomplete') matAutocomplete: MatAutocomplete;
  constructor(private formBuilder: FormBuilder) {
    this.filteredTags = this.tagControl.valueChanges.pipe(
      startWith(null),
      map((value: any | null) => value ? this._filter(value) : this.allTags.slice())
    );
  }
  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      detailsControl: ['', Validators.required]
    });
  }
  add(event: MatChipInputEvent) {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value as any;
      if ((value.name || '').trim()) {
        this.tags.push(value);
      }
      if (input) {
        input.value = '';
      }
      this.tagControl.setValue(null);
    }
  }
  remove(tag) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.value);
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);
  }
  private _filter(value: any): any[] {
    let filterValue;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = value.name.toLowerCase();
    }
    return this.allTags.filter(tag => tag.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
