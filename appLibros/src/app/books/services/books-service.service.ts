import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Book } from '../interface/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  public baseUrl: string =  enviroments.baseUrl;
  private _books: Book[] = [];
  private _booksList: Book[] = [];

  constructor( private http: HttpClient) {
    this.getBooks()
      .subscribe( resp => {
        this._books = resp
      //  this._books = this._bdbooks
      });

  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/library`)
  }

  getBooksByISBN( isbn: string): Observable<Book | undefined >{
    return this.http.get<Book>(`${this.baseUrl}/library?book.`+isbn);
  }

  filterBooksByPages(pages: number){
    this._books = (this._books.filter(book => book.book.pages <= pages));
  }

  get books(): Book[] {
    return this._books;
  }

  set books(value: Book[]) {
    this._books = value;
  }

  get booksList(): Book[] { // Cambiado el nombre del getter
    return this._booksList;
  }

  set booksList(value: Book[]) {
    this._booksList = value;
  }

}
