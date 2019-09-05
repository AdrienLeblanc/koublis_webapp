import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineService } from './service/wine.service';
import { NotificationService } from './service/notification.service';
import './bootstrap/css/bootstrap.css';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastyService, ToastyConfig, ToastyModule } from 'ng2-toasty';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineFormComponent
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
