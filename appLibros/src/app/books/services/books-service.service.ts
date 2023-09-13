import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/environments/environments';
import { Book } from '../interface/book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  public baseUrl: string =  enviroments.baseUrl;

  private _books: Book[] = [];
  private _booksList: Book[] = [];

  constructor( private http: HttpClient) {
    this.getBooks()
      .subscribe( resp =>  this.books = resp)
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/library`)
  }

  getBooksByISBN( isbn: string): Observable<Book | undefined >{
    return this.http.get<Book>(`${this.baseUrl}/library?book.`+isbn);
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

  set booksList(value: Book[]) { // Cambiado el nombre del setter
    this._booksList = value;
  }

}
