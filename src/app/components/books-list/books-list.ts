import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-books-list',
  imports: [DatePipe],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList implements OnInit {
  items: Book[] = [];
  // items: Book[] = [
  //   { id: 1, title: 'Sample Book', author: 'Author Name', publishedDate: new Date() },
  //   { id: 2, title: 'Another Book', author: 'Another Author', publishedDate: new Date() },
  //   { id: 3, title: 'Third Book', author: 'Third Author', publishedDate: new Date() },
  // ];

  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAll().subscribe((data) => (this.items = data));
  }
}
