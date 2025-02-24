import {createAction, props} from "@ngrx/store";
import {BookModel} from "../../models/book.model";

export const getBookById = createAction(
    '[Book] Get Book Detail',
    props<{ id: string }>(),
);

export const getBookByIdSuccess = createAction(
    '[Book] Get Book Detail Success',
    props<{ bookDetail: BookModel }>(),
);

export const getBookByIdFailure = createAction(
    '[Book] Get Book Detail Failure',
    props<{ error: any }>(),
);

export const getBookList = createAction('[Book] Get Book List');

export const getBookListSuccess = createAction(
    '[Book] Get Book List Success',
    props<{ bookList: BookModel[] }>(),
);

export const getBookListFailure = createAction(
    '[Book] Get Book List Failure',
    props<{ error: any }>(),
);