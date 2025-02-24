import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookModel} from "../../models/book.model";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book/book.service";
import {Store} from "@ngrx/store";
import {BookState} from "../../ngrx/book/book.state";
import * as BookActions from "../../ngrx/book/book.actions";
import {AsyncPipe, NgIf} from "@angular/common";
@Component({
  selector: 'app-bookdetail-page',
  standalone: true,
  imports: [
    AsyncPipe,NgIf
  ],
  templateUrl: './bookdetail-page.component.html',
  styleUrl: './bookdetail-page.component.scss'
})
export class BookdetailPageComponent implements OnInit{
  currentproduct$!: Observable<BookModel | null>;
    constructor(private route: ActivatedRoute, private BookService: BookService,
                private store: Store<{ book: BookState }>) {
      this.currentproduct$ = this.store.select('book', 'bookDetail');
    }
    ngOnInit() {
      this.route.params.subscribe((params) => {
        const id = params['id'];
        this.store.dispatch(BookActions.getBookById({id}));
        console.log(params);
      });
    }
}
