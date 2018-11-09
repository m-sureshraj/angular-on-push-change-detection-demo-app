import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildJsonPrinterComponent, AboutComponent, TodolistComponent, TodoComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ChildJsonPrinterComponent,
    AboutComponent,
    TodolistComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
