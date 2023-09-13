import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { MaterialModule } from '../material/material.module';
import { BookImagePipe } from './pipes/book-image.pipe';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { BooksComponent } from './pages/books/books.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    CardComponentComponent,


    //Pipes
    BookImagePipe,
      MenuComponentComponent,
      BooksComponent,
      BookListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
    FormsModule
  ]
})
export class BooksModule { }
