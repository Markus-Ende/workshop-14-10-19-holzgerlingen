import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books/books.component';
import { ConfirmCandeactivateGuard } from './confirm-candeactivate.guard';
import { BookNewComponent } from './book-new/book-new.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      { path: 'new', component: BookNewComponent },
      {
        path: ':isbn',
        component: BookDetailComponent,
        canDeactivate: [ConfirmCandeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
