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
  @Input() listArr: object[];
  @Input() currentPage: number;
  constructor() {
  }
  @Output() onChanged = new EventEmitter<Number>()
  turnPage(param: number) {
    console.log(param, "inputed")
    param++;
    console.log(param, "increased")
    this.onChanged.emit(param);
    this.list = this.listArr
  }

}
