import { Injectable } from '@angular/core';
import { Book } from './book';
import { of, Observable, interval, timer } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }
}
