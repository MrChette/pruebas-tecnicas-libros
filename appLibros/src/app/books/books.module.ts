import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { MaterialModule } from '../material/material.module';
import { BookImagePipe } from './pipes/book-image.pipe';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';


@NgModule({
  declarations: [
    MainPageComponent,
    CardComponentComponent,


    //Pipes
    BookImagePipe,
      MenuComponentComponent
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
