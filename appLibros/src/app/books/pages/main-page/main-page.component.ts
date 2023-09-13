import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from '../../interface/book.interface';
import { BooksServiceService } from '../../services/books-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
      private booksService : BooksServiceService
  ){}

  public get getGenres() {
    return [...new Set(this.booksService.books.map((item) => item.book.genre))];
  }

  get getBooks() {
    return this.booksService.books;
  }

  public get nBooks(): number {
    return this.booksService.books.length;
  }

}
