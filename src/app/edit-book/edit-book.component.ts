import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Output('bookSubmitted') bookSubmitted = new EventEmitter();
  title: string = "Edit Book";
  @Input('OpenBookEdit') upBook;
  @Output('EditedBook') updatedBook = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateBook(bookToUpdate){
     this.updatedBook.emit(bookToUpdate);
     this.bookSubmitted.emit(true);
  }

}
