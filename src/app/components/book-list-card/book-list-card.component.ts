import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list-card',
  standalone: true,
  imports: [],
  templateUrl: './book-list-card.component.html',
  styleUrl: './book-list-card.component.scss'
})
export class BookListCardComponent {
  @Input() book: any;

  constructor(private router: Router) {
  }

  navigateToDetail() {
    this.router.navigate(['/detail', this.book.number]);
  }
}
