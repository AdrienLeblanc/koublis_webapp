import './bootstrap/css/bootstrap.css';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastyService, ToastyConfig, ToastyModule } from 'ng2-toasty';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineFormComponent } from './wine-form/wine-form.component';

import { WineService } from './service/wine.service';
import { NotificationService } from './service/notification.service';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineFormComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    BrowserAnimationsModule,
    ToastyModule.forRoot()
  ],
  providers: [
    WineService,
    NotificationService,
    ToastyService,
    ToastyConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
