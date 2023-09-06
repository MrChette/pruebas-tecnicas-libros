import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from '../../interface/book.interface';
import { BooksServiceService } from '../../services/books-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private books: Book[] = [];
  private booksList: Book[] = [];
  private genres: string[] = [];

  constructor(
      private booksService : BooksServiceService){}

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.getGenres;
      });
  }

  public get getGenres() {
    return this.genres = [...new Set(this.books.map((item) => item.book.genre))];
  }

  public get getBooks() {
    return this.books;
  }

  public get getBookList(): Book[] {
    return this.booksList;
  }

  public get nBooks(): number {
    return this.books.length;
  }


  addToList( book: Book): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1); // Elimina el libro de books
      this.booksList.push(book);  // Agrega el libro a booksList
    }
  }

  addToBooks( book: Book): void {
    const index = this.booksList.indexOf(book);
    if (index !== -1) {
      this.booksList.splice(index, 1); // Elimina el libro de booksList
      this.books.push(book);  // Agrega el libro a books
    }
  }



}
