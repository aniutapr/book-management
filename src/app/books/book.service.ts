import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  
  addBook(book:Book):Observable<Book>{
    return of(book);
  }
}
