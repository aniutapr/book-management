import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot<AppState>({book: BookReducer}), EffectsModule,Injectable
  ]
})
export class AppModule { }
