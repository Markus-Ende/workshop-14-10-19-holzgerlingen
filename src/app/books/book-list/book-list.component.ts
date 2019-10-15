import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'me-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  private sub = Subscription.EMPTY;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.sub = this.bookData
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
