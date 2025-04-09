import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListItemComponent } from './books-list-item/books-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BooksListComponent, BooksListItemComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [BooksListComponent, BooksListItemComponent]

})
export class BooksListModule { }
