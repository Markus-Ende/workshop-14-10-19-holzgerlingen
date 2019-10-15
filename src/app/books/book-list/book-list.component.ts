import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'me-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  booksFancy$: Observable<Book[]>;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookData.getBooks();
    this.booksFancy$ = this.books$.pipe(
      switchMap((books: Book[]) =>
        interval(1000).pipe(
          map(i => books.slice(0, i + 1)),
          take(books.length)
        )
      )
    );
  }
}
