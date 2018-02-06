import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { InitialStateComponent} from '../../initial-state/initial-state.component'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent{
  @Input () item: any;

  constructor() { }

  ngOnInit() {
  }

}
