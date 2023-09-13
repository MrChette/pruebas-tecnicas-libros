import { Component } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { Book } from '../../interface/book.interface';

@Component({
  selector: 'app-books-page',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {


  constructor(
    private booksService : BooksServiceService
){}

  get getBooks() {
    return this.booksService.books;
  }

  addToList( book: Book): void {
    const index = this.booksService.books.indexOf(book);
    if (index !== -1) {
      this.booksService.books.splice(index, 1); // Elimina el libro de books
      this.booksService.booksList.push(book);  // Agrega el libro a booksList
    }
  }



}
