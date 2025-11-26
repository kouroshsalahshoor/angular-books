import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books-service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { mapToView } from '../../utils/book-mapper';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-books-list',
  imports: [DatePipe, RouterLink, AsyncPipe],
  templateUrl: './books-list.html',
  styleUrls: ['./books-list.css'],
})
export class BooksList {
  items$!: Observable<Book[]>;
  // items: Book[] = [];
  // items: Book[] = [
  //   { id: 1, title: 'Sample Book', author: 'Author Name', publishedDate: new Date() },
  //   { id: 2, title: 'Another Book', author: 'Another Author', publishedDate: new Date() },
  //   { id: 3, title: 'Third Book', author: 'Third Author', publishedDate: new Date() },
  // ];

  constructor(private service: BooksService) {
    this.load();
  }

  load(): void {
    this.items$ = this.service
      .getAll()
      .pipe(map((data) => data.map((item: any) => mapToView(item))));
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.items$ = this.service.delete(id).pipe(
        switchMap(() => this.service.getAll()),
        map((data) => data.map((item: any) => mapToView(item)))
      );
    }
  }
}
