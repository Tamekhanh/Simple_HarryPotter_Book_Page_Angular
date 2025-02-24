import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book/book.service";
import {Store} from "@ngrx/store";
import {BookState} from "../../ngrx/book/book.state";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import * as BookActions from "../../ngrx/book/book.actions";
import {BookListCardComponent} from "../../components/book-list-card/book-list-card.component";


@Component({
  selector: 'app-booklist-page',
  standalone: true,
  imports: [
    AsyncPipe, NgFor, NgIf, BookListCardComponent
  ],
  templateUrl: './booklist-page.component.html',
  styleUrl: './booklist-page.component.scss'
})
export class BooklistPageComponent implements OnInit, OnDestroy{
  book$ !: Observable<BookModel[]>;
  subscriptions: Subscription[] = [];

  constructor(private bookService: BookService,
               private store: Store<{ book: BookState }>) {
    this.book$ = this.store.select('book', 'bookList');
    this.store.dispatch(BookActions.getBookList());

  }
  ngOnInit() {
    this.subscriptions.push(
        this.book$.subscribe((data) => {
          console.log(data);
        })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

