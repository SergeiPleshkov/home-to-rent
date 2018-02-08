import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent{
  @Input () item: object;
  favsArr: object[];
  isFaved: boolean;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.isFaved = localStorage.getItem('homeToRentFavs').includes(JSON.stringify(this.item));
    this.favsArr= JSON.parse(localStorage.getItem('homeToRentFavs')) || [];
  }

  toggleClass(e) {
    e.target.classList.toggle('added-to-favs');
  }
  toggleFavs(item, event) {
    if (!localStorage.getItem('homeToRentFavs').includes(JSON.stringify(this.item))) {
      this.favsArr.push(this.item);
      localStorage.setItem('homeToRentFavs', JSON.stringify(this.favsArr));
      this.toggleClass(event);
    } else {
      for (let i = 0; i < this.favsArr.length; i++) {
        if (JSON.stringify(this.favsArr[i]) === JSON.stringify(this.item)) {
          this.favsArr.splice(i, 1);
          localStorage.setItem('homeToRentFavs', JSON.stringify(this.favsArr));
          this.toggleClass(event);
          return;
        } 
      }
    }
  }
 }
