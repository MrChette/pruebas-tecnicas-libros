import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent {

  @Input()
  genres:string [] = [];

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }


}
