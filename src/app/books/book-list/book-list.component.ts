import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { switchMap, map, take } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'me-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.bookData
      .getBooks()
      .pipe(
        switchMap((books: Book[]) =>
          interval(1000).pipe(
            map(i => books.slice(0, i + 1)),
            take(books.length)
          )
        )
      )
      .subscribe(books => (this.books = books));
  }
}
