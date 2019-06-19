import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineService } from './service/wine.service';

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
    FormsModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent],
})
export class AppModule { }