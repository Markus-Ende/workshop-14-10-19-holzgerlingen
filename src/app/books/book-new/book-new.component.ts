import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'me-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private readonly subscriptions = new Subscription();

  constructor(private fb: FormBuilder, private books: BookDataService) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });

    this.subscriptions.add(this.form.valueChanges.subscribe(console.log));
    this.subscriptions.add(this.form.statusChanges.subscribe(console.log));
  }

  onSubmit() {
    const newBook: Book = {
      title: this.form.value.title,
      author: this.form.value.author,
      isbn: ''
    };
    this.subscriptions.add(this.books.createBook(newBook).subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
