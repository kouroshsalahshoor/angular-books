import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { BooksList } from './components/books-list/books-list';
import { BookForm } from './components/book-form/book-form';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'books', component: BooksList },
  { path: 'book/add', component: BookForm },
  { path: 'book/edit/:id', component: BookForm },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', redirectTo: '/books' },
];
