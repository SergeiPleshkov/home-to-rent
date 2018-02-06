import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ForSaleComponent } from './aside/for-sale/for-sale.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { InitialStateComponent } from './initial-state/initial-state.component';
import { HeaderComponent } from './header/header.component'

const appRoutes: Routes = [
  { path: '', component: InitialStateComponent },
  { path: 'list', component: ListComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MapComponent,
    ListComponent,
    ListItemComponent,
    ForSaleComponent,
    InitialStateComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
