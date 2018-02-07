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
  constructor() {
  }
  @Output() onChanged = new EventEmitter<Number>()
  turnPage(param: string) {
    this.onChanged.emit(param == 'next' ? ++this.currentPage : param == 'prev' && this.currentPage !== 1 ? --this.currentPage : null);
    this.list = this.listArr
  }

}
