import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {BookService} from "../../services/book/book.service";
import * as BookActions from "./book.actions";
import {catchError, exhaustMap, map, mergeMap, of} from "rxjs";
import {BookModel} from "../../models/book.model";


export const bookEffects = createEffect(
    (actions$ = inject(Actions), bookService = inject(BookService)) => {
        return actions$.pipe(
            ofType(BookActions.getBookList),
            mergeMap(() =>
                bookService.getAllBook().pipe(
                    map((books : any) => BookActions.getBookListSuccess({ bookList: books })),
                    catchError((error) => of(BookActions.getBookListFailure({ error }))
                )
            )
            )
        );
    },
    { functional: true }
);
export const getBookbyID = createEffect(
    (actions$ = inject(Actions), bookService = inject(BookService)) => {
        return actions$.pipe(
            ofType(BookActions.getBookById),
            exhaustMap((action) =>
                bookService.getBookById(action.id).pipe(
                    map((bookDetail) => BookActions.getBookByIdSuccess({ bookDetail })),
                    catchError((error) => of(BookActions.getBookByIdFailure({ error }))
                    )
                )
            )
        );
    },
    { functional: true }
);