import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { AppState } from './app.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot<AppState>({book: BookReducer})
  ]
})
export class AppModule { }
