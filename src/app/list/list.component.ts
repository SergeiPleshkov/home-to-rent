import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {ListItemComponent} from './list-item/list-item.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SharedService]
})
export class ListComponent {
  list: object[];
  constructor(public ss: SharedService) { 
    this.list = this.ss.list;
  }

}
