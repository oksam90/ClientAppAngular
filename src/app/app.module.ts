import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListCustumerComponent } from './list-custumer/list-custumer.component';
import { AddCustumerComponent } from './add-custumer/add-custumer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustumerComponent,
    ListCustumerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListCustumerComponent, pathMatch: 'full' },
      { path: 'custumers/add', component: AddCustumerComponent },
      { path: 'custumers/edit/:id', component: AddCustumerComponent },
      { path: 'custumers', component: ListCustumerComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
