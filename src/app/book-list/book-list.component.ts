import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>){
    this.books$=store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string){
    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId:string){
    this.store.dispatch(RemoveBook({bookId}));
  }
}
