import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AppmodalComponent } from './components/app-modal/app-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPageComponent,
    AppmodalComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
