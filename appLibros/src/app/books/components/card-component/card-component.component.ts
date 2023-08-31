import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interface/book.interface';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
})
export class CardComponentComponent implements OnInit {

  @Input()
  public book!: Book;


  ngOnInit(): void {
    if( !this.book ) throw Error('Book is required')
  }

}
