import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemComponent } from './list/list-item/list-item.component'
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpParams } from '@angular/common/http/src/params';
import { ListComponent } from './list/list.component';
import { LoadingComponent} from './loading/loading.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  initialForm: FormGroup;
  list: object[] = [];
  totalPages: number;
  page: number = 1;
  constructor(private http: HttpClient,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.makeListArray(); //for debug, remove later
  }
  onSubmit() {
    this.makeListArray();
  }

  initForm() {
    this.initialForm = this.fb.group({
      listingType: ['rent'],
      placeName: ['London']
    });
  }

  makeListArray() {
    let queryParams = {
      encoding: 'json',
      pretty: '1',
      page: this.page.toString(),
      action: 'search_listings',
      country: 'uk',
      number_of_results: '20',
      listing_type: this.initialForm.value.listingType,
      language: 'en',
      place_name: this.initialForm.value.placeName
    };
    this.loading = true;
    this.http.get('http://api.nestoria.co.uk/api', { params: queryParams }).subscribe(response => {
      this.list = []
      response['response']['listings'].forEach(el => this.list.push(el));
      this.totalPages = response['response']['total_pages'];
      this.loading = false;
    });
  }


  selectPage(param: number) {
    if (param > this.totalPages || param < 1) return;
    this.page = param;
    this.makeListArray();
    window.scrollTo(0, 0);
  }
}