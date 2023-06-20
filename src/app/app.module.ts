import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ButtonComponent from 'src/stories/button/button.component';
import SelecterComponent from 'src/stories/selecter/selecter.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelecterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
