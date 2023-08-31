import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "../interface/book.interface";



@Pipe({
  name: 'bookImage'
})

export class BookImagePipe implements PipeTransform{


  transform( book: Book): string {

    if( !book.book.ISBN && !book.book.cover){
      return 'assets/no-image.png'
    }

    return book.book.cover;

  }

}
