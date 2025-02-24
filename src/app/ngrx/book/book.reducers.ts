import {BookModel} from "../../models/book.model";
import {BookState} from "./book.state";
import {createReducer, on} from "@ngrx/store";
import * as BookActions from "./book.actions";
export const initialBookState: BookState = {
    bookDetail: null,
    bookList: [],
    isfletching: false,
    fletchingSuccess: false,
    fletchingError: null,
}

export const bookReducer = createReducer(
    initialBookState,

    on(BookActions.getBookList, (state: BookState) => {
        return <BookState>{
            ...state,
            bookList: [],
            isfletching: true,
        }
    }),
    on(BookActions.getBookListSuccess, (state, { bookList, type }) => {
        return <BookState>{
            ...state,
            bookList: bookList,
            isfletching: false,
            fletchingSuccess: true,
        }
    }),
    on(BookActions.getBookListFailure, (state: BookState, { error, type }) => {
        return <BookState>{
            ...state,
            fletchingError: error.message,
            isfletching: false,
        }
    }),
    on(BookActions.getBookById, (state: BookState) => {
        return <BookState>{
            ...state,
            bookDetail: null,
            isfletching: true,
        }
    }),
    on(BookActions.getBookByIdSuccess, (state: BookState, { bookDetail, type }) => {
       return <BookState> {
           ...state,
           bookDetail: bookDetail,
           isfletching: false,
           fletchingSuccess: true,
       }
    }),
    on(BookActions.getBookByIdFailure, (state: BookState, { error, type }) => {
        return <BookState>{
            ...state,
            fletchingError: error.message,
            isfletching: false,
        }
    })


)