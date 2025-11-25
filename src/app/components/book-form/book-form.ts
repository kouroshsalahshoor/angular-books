import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BooksService } from '../../services/books-service';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnInit {
  form: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: BooksService,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedDate: [new Date(), Validators.required],
    });
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.load(this.id);
    }
  }

  load(id: number): void {
    this.service.getById(id).subscribe({
      next: (data) => {
        this.form.patchValue({
          id: data.id,
          title: data.title,
          author: data.author,
          publishedDate: data.publishedDate,
          // publishedDate: data.publishedDate.toISOString().split('T')[0],
        });
      },
      error: (error) => {
        console.log('error load', error);
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const model = this.form.value;
      console.log(model);

      if (this.id) {
        this.service.update(this.id, model).subscribe({
          next: (data) => {
            this.router.navigate(['/books']);
          },
          error: (error) => {
            console.log('error update', error);
          },
        });
      } else {
        this.service.create(model).subscribe({
          next: (data) => {
            this.router.navigate(['/books']);
          },
          error: (error) => {
            console.log('error create', error);
          },
        });
      }
    }
  }

  cancel() {
    this.router.navigate(['/books']);
  }
}
