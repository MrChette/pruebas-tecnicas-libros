import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interface/book.interface';

@Component({
  selector: 'card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  @Input()
  public book!: Book;


  ngOnInit(): void {
    if( !this.book ) throw Error('Book is required')
  }

}
