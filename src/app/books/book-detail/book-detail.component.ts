import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'me-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book$: Observable<Book>;

  // private readonly subs = new Subscription();
  // subs.add(...)

  constructor(private route: ActivatedRoute, private books: BookDataService) {}

  ngOnInit() {
    // this.subs.add(
    //   this.route.params.subscribe((params: { isbn: string }) => {
    //     this.book$ = this.books.getBookByIsbn(params.isbn);
    //   })
    // );

    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) =>
        this.books.getBookByIsbn(params.isbn)
      )
    );
  }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  // }
}
