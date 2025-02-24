import {BookModel} from "../../models/book.model";

export interface BookState {
    bookDetail: BookModel | null;
    bookList: BookModel[];
    isfletching: boolean;
    fletchingSuccess: boolean;
    fletchingError: any;
}