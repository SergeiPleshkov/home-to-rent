import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { Input } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
import { LoadingComponent } from '../loading/loading.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  data: any;
  listItem: object;
  next: string = 'next';
  prev: string = 'prev';
  paginatorArr: number[] = [1, 2, 3, 4, 5];
  constructor(private ds: DataService) {}
  ngOnInit() {
    this.data = this.ds.getData();
  }
  turnPage(param: string) {
    this.data = this.ds.getData()
    param == 'next' ? ++this.data.page : param == 'prev' && this.data.page !== 1 ? --this.data.page : !isNaN(+param) ? this.data.page = +param : null;
    for (let i = this.data.page - 3; i < this.data.page + 4; i++) {
      this.paginatorArr[i + 3 - this.data.page] = i;
    }
    this.ds.setData(this.data);
    this.ds.selectPage(this.data.page)
  }

}
