import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemComponent } from './list/list-item/list-item.component'
import { ListComponent } from './list/list.component';
import { LoadingComponent } from './loading/loading.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  data: any = {
    loading: true,
    list: [],
    totalPages: null,
    page:  1
  }
  initialForm: FormGroup;
  constructor(private fb: FormBuilder,
  private ds: DataService) {  }

  ngOnInit() {
    this.initForm();
    this.ds.makeListArray(); //for debug, remove later
    this.ds.setData(this.data)
  }
  onSubmit() {
    this.ds.makeListArray();
  }

  initForm() {
    this.initialForm = this.fb.group({
      listingType: ['rent'],
      placeName: ['London']
    });
    this.ds.listingType = this.initialForm.value.listingType;
    this.ds.placeName = this.initialForm.value.placeName;
  }

}