import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  next: string = 'next';
  prev: string = 'prev';
  @Input() total: number;
  @Input() listExists: boolean;
  @Input() currPage: number;
  @Input() pgnArr: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }
  @Output() onTurn = new EventEmitter<Number>()
  turnPage(param: string) {
    this.onTurn.emit(param == 'next' ? ++this.currPage : param == 'prev' && this.currPage !== 1 ? --this.currPage : !isNaN(+param) ? this.currPage = +param : null);
    for (let i = this.currPage - 3; i < this.currPage + 4; i++) {
      this.pgnArr[i + 3 - this.currPage] = i;
    }
  }
}
