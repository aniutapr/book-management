import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookFailure, AddBookSuccess } from "./book.actions";
import { Book } from "../models/book";
import { error } from "console";
export const initialState: Book[] = []; //not readonly

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state)=> {return state}), //...state ensure immutability, = readonly
    on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(AddBookFailure, (state, {error}) =>{
        console.error(error);
        return state;
    }),
    on(RemoveBook, (state, {bookId}) => [...state.filter(book => book.id !== bookId)])
);