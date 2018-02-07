import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component'
import { Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: []
})
export class ListComponent {
  list: object[];
  listItem: object;
  next: string = 'next';
  prev: string = 'prev';
  @Input() listArr: object[];
  @Input() currentPage: number;
  @Input() paginatorArr: number[] = [1, 2, 3, 4, 5];
  constructor() {
  }
  @Output() onChanged = new EventEmitter<Number>()
  turnPage(param: string) {
    this.onChanged.emit(param == 'next' ? ++this.currentPage : param == 'prev' && this.currentPage !== 1 ? --this.currentPage : !isNaN(+param) ? this.currentPage = +param : null);
    this.list = this.listArr;
    for (let i = this.currentPage - 3; i < this.currentPage + 4; i++) {
      this.paginatorArr[i + 3 - this.currentPage] = i;
    }
  }

}
