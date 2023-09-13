import { Component } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
import { Book } from '../../interface/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  constructor(
    private booksService : BooksServiceService
  ){}


  public get getBookList(): Book[] {
    return this.booksService.booksList;
  }

  addToBooks( book: Book): void {
    const index = this.booksService.booksList.indexOf(book);
    if (index !== -1) {
      this.booksService.booksList.splice(index, 1); // Elimina el libro de booksList
      this.booksService.books.push(book);  // Agrega el libro a books
    }
  }

}
