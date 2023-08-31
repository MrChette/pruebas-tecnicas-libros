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

  constructor( private booksService : BooksServiceService ){}

  ngOnInit(): void {
    this.booksService.getBooks()
      .subscribe( books => this.books = books);
  }



}
