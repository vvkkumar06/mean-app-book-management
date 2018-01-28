import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BookService {

  allBookUrl: string= 'api/books';
  bookById: string ='api/book/id/';
  putUrl: string = 'api/update/id/';
  postUrl: string = 'api/book/add';
  deleteUrl:string = 'api/book/remove/id/';

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this._http.get<Book[]>(this.allBookUrl);
  }

  getBookById(id: string): Observable<Book[]>{
    return this._http.get<Book[]>(this.bookById+id);
  }

  updateBook(book): Observable<any>{
    return this._http.put(this.putUrl+book._id, book, httpOptions);
  }

  insertNewBook(book: Book){
    return this._http.post(this.postUrl, book, httpOptions);
  }

  deleteBook(book): Observable<Book[]>{
    return this._http.delete<Book[]>(this.deleteUrl+book._id, httpOptions);
  }
}
