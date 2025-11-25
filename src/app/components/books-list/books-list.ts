import { Component } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  imports: [],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList {
  items: Book[] = [
    { id: 1, title: 'Sample Book', author: 'Author Name', publishedDate: new Date() },
    { id: 2, title: 'Another Book', author: 'Another Author', publishedDate: new Date() },
    { id: 3, title: 'Third Book', author: 'Third Author', publishedDate: new Date() },
  ];
}
