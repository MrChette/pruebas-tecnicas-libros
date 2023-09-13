import { Component, Input, } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BooksServiceService } from '../../services/books-service.service';


@Component({
  selector: 'menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent {

  @Input()
  genres:string [] = [];

  constructor(
    private booksService : BooksServiceService
  ) {}


  formatLabel(value: number): string {
    return `${value}`;
  }

  onInputChange(event: Event) {
    setTimeout(() => {
      const inputValue = (event.target as HTMLInputElement).value;
      const numericValue = parseInt(inputValue, 10);
      this.booksService.filterBooksByPages(numericValue)
    }, 350);
  }


}
