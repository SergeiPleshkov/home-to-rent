import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemComponent } from '../list/list-item/list-item.component'

@Component({
  selector: 'app-initial-state',
  templateUrl: './initial-state.component.html',
  styleUrls: ['./initial-state.component.css']
})

export class InitialStateComponent implements OnInit {
  initialForm: FormGroup;
  list: object;
  listItem: any;
  itemsCount: number = 20;

  constructor(private http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    this.makeListArray();
  }

  initForm() {
    this.initialForm = this.fb.group({
      listing_type: ['rent'],
      place_name: ['London']
    });
  }

  makeUrl() {

    let data = {
      "encoding": "json",
      "pretty": "1",
      "action": "search_listings",
      "country": "uk",
      "number_of_results": this.itemsCount,
      "listing_type": this.initialForm.value.listing_type,
      "language": "en",
      "place_name": this.initialForm.value.place_name
    };

    let querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');
    return 'http://api.nestoria.co.uk/api?' + querystring;
  };

  makeListArray() {
    this.http.get(this.makeUrl()).subscribe(r => {
      this.list = r["response"]["listings"].slice();
      console.log(this.list)
    });
  }

  addMoreItems() {
    this.itemsCount += 20;
    this.makeListArray()
  }

}
