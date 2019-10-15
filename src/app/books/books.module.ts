import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent],
  imports: [CommonModule, BooksRoutingModule, HttpClientModule],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule {}
