import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgIconModule } from 'icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
