import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { MaterialModule } from '../material/material.module';
import { BookImagePipe } from './pipes/book-image.pipe';


@NgModule({
  declarations: [
    MainPageComponent,
    CardComponentComponent,


    //Pipes
    BookImagePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class BooksModule { }
