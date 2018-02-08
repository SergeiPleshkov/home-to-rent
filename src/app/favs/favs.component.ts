import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemComponent } from '../list/list-item/list-item.component';
import { PaginatorComponent } from '../list/paginator/paginator.component';
import { Input } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
import { LoadingComponent } from '../loading/loading.component'

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit{
  data: any = {};
  listItem: object;
  next: string = 'next';
  prev: string = 'prev';
  paginatorArr: number[] = [1,2,3,4,5];
  constructor(private ds: DataService) {}
  ngOnInit() {
    this.data.list = this.ds.getFavs();
    this.data.totalPages = Math.ceil(this.data.list.length / 20);
    this.paginatorArr.length = this.data.totalPages;
  }
  turnPage(param: string) {
    param == 'next' ? ++this.data.page : param == 'prev' && this.data.page !== 1 ? --this.data.page : !isNaN(+param) ? this.data.page = +param : null
    for (let i = this.data.page - 3; i < this.data.page + 4; i++) {
      this.paginatorArr[i + 3 - this.data.page] = i;
    }
    this.ds.selectPage(this.data.page)
  }

}
