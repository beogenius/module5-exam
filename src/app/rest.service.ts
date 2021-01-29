import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';
import {Observable} from 'rxjs';
import {BookFetch} from './bookFetch';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };
  books: Book[] = [];
  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/Books/';
  getBooks() {
    return this.http.get<Book[]>(this.url);
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Book>(url, this.httpOptions);
  }
  getUpdateBook(id: number): Observable<Book> {
    const url = `${this.url}/${id}`;
    return this.http.get<Book>(url, this.httpOptions);
  }

  updateBook(book: BookFetch): Observable<Book> {
    const url = `${this.url}/${book.id}`;
    return this.http.put<Book>(url, book, this.httpOptions).pipe(
      map(() => book)
    );
  }

  add(book: Book) {
    return this.http.post(`${this.url}`,book,this.httpOptions);
  }


}
