import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpParams } from '@angular/common/http/src/params';

@Injectable()
export class DataService {

  data: any = {
    page: 1
  };
  listingType: string;
  placeName: string;

  constructor(private http: HttpClient) {
    this.makeListArray()
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getFavs() {
    return JSON.parse(localStorage.getItem('homeToRentFavs'))
  }

  setFavs(data) {
    localStorage.setTitem('homeToRentFavs', JSON.stringify(data))
  }

  makeListArray() {
    let queryParams = {
      encoding: 'json',
      pretty: '1',
      page: (this.data.page + 3).toString(),
      action: 'search_listings',
      country: 'uk',
      number_of_results: '20',
      listing_type: this.listingType,
      language: 'en',
      place_name: this.placeName
    };
    this.data.loading = true;
    this.http.get('http://api.nestoria.co.uk/api', { params: queryParams }).subscribe(response => {
      this.data.list = []
      response['response']['listings'].forEach(el => this.data.list.push(el));
      this.data.totalPages = response['response']['total_pages'];
      this.data.loading = false;
      this.setData(this.data);
    });
  }


  selectPage(param: number) {
    if (param > this.data.totalPages || param < 1) return;
    this.data.page = param;
    this.makeListArray();
    window.scrollTo(0, 0);
  }

}
