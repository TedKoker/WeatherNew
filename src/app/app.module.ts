import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherbodyComponent } from './weatherbody/weatherbody.component';
import { WeathersearchComponent } from './weatherbody/weathersearch/weathersearch.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherbodyComponent,
    WeathersearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
