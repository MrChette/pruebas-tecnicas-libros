import { Component, OnInit } from '@angular/core';
import { Book } from '../../interface/book.interface';
import { BooksServiceService } from '../../services/books-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public books: Book[] = [];
  public genres: string[] = [];
  public nBooks: number = 0;

  constructor( private booksService : BooksServiceService ){}

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.getNumberBooks();
        this.getGenres(); // Llama a getGenres() después de cargar los libros
      });
  }

  getGenres() {
    this.genres = [...new Set(this.books.map((item) => item.book.genre))];
  }

  getNumberBooks(): void{
    this.nBooks = this.books.length;
  }



}
