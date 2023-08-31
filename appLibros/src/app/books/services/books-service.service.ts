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

  constructor( private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/library`)
  }

  getBooksByISBN( isbn: string): Observable<Book | undefined >{
    return this.http.get<Book>(`${this.baseUrl}/library?book.`+isbn);
  }
}
