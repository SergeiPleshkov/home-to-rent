import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent{
  @Input () item: object;
  favsArr: object[] = JSON.parse(localStorage.getItem('homeToRentFavs')) || [];
  isFaved: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isFaved = localStorage.getItem('homeToRentFavs').includes(JSON.stringify(this.item));
  }
  toggleClass(e) {
    e.target.classList.toggle('added-to-favs');
  }
  toggleFavs(item, event) {
    if (!this.favsArr.includes(this.item)) {
      this.favsArr.push(this.item);
      localStorage.setItem('homeToRentFavs', JSON.stringify(this.favsArr));
      this.toggleClass(event);
      console.log('added, ls = ', localStorage.getItem('homeToRentFavs'))
    } else {
      for (let i = 0; i < this.favsArr.length; i++) {
        if (JSON.stringify(this.favsArr[i]) === JSON.stringify(this.item)) {
          this.favsArr.splice(i, 1);
          localStorage.setItem('homeToRentFavs', JSON.stringify(this.favsArr));
          this.toggleClass(event);
          console.log('removed, ls = ', localStorage.getItem('homeToRentFavs'))
          return;
        } 
      }
    }
  }
 }
