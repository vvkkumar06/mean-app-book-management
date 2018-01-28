import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {
  title: string = "Add New Book";
  @Output('NewBook') newbook = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmitAddBook(formData){
   // console.log(formData);
    if(formData.name && formData.author && formData.category && formData.price && formData.stock){
      this.newbook.emit(formData);
    }else{
      alert("One or many fields are empty!");
    }


  }
}
