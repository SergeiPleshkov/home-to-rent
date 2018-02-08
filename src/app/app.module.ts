import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ForSaleComponent } from './aside/for-sale/for-sale.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from './list/paginator/paginator.component';
import { LoadingComponent } from './loading/loading.component';
import { FavsComponent } from './favs/favs.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'favorites', component: FavsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ListComponent,
    ListItemComponent,
    ForSaleComponent,
    PaginatorComponent,
    LoadingComponent,
    FavsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
