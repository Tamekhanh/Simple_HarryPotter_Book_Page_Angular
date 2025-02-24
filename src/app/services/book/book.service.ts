import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../../models/book.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

    constructor(private httpClient: HttpClient) {
    }

    getAllBook():Observable<BookModel[]> {
        return this.httpClient.get<BookModel[]>('https://potterapi-fedeperin.vercel.app/en/books')
    }

    getBookById(id: string): Observable<BookModel> {
        return this.getAllBook().pipe(
            map((books: BookModel[])=> books.find(book =>book.number === parseInt(id))!)
        );
    }
}
