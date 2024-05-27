import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = []; //not readonly

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]), //...state ensure immutability, here readonly
    on(RemoveBook, (state, {bookId}) => [...state.filter(book => book.id !== bookId)]),
);