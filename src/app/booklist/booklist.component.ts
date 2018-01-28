import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Book[];
  submitted = true;
  constructor(private bookService: BookService) { }
  BookToUpdate: any;
  openUpdateForm = false;

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void{
      this.bookService.getBooks()
        .subscribe(books=> this.books=books);
  }

  InsertBook(addedBook){
      this.bookService.insertNewBook(addedBook)
        .subscribe((book: Book)=>{
          this.books.push(book);
          this.getAllBooks();
        });
        this.submitted = true;
  }
  addNewBookButton(){
      this.submitted=!this.submitted;
  }

  deleteBook(bookToDel, i){
    this.bookService.deleteBook(bookToDel)
      .subscribe(delBook => this.books.splice(i, 1));
  }

  UpdateEditedBook(bookToUpdate){
      this.bookService.updateBook(bookToUpdate)
        .subscribe((resBook)=>{ 
          bookToUpdate = resBook; 
        });
  }

  OpenBookUpdate(book){
      this.BookToUpdate = book;
      this.openUpdateForm = !this.openUpdateForm;
  }

}
