import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemComponent } from './list/list-item/list-item.component'
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpParams } from '@angular/common/http/src/params';
import { SharedService } from './shared.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent implements OnInit {
  initialForm: FormGroup;
  list: object[];
  listItem: object;
  page: number;
  constructor(private http: HttpClient,
    private fb: FormBuilder,
    public ss: SharedService) {
    }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    this.list = []
    this.page = 1;
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

    this.http.get('http://api.nestoria.co.uk/api', { params: queryParams }).subscribe(response => {
      if (this.list[0] && !this.list[0]['listing_type'] !== this.initialForm.value.listingType) this.list = []
      response['response']['listings'].forEach(el => this.list.push(el));
      this.ss.list = this.list;
      console.log(this.list, this.ss.list)
    });
  }

  addMoreItems() {
    this.page++;
    this.makeListArray()
  }

}