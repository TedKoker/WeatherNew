import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherbodyComponent } from './weatherbody/weatherbody.component';
import { WeathersearchComponent } from './weatherbody/weathersearch/weathersearch.component';
import {HttpClientModule} from '@angular/common/http';
import { WeatherMainDisplayComponent } from './weatherbody/weather-main-display/weather-main-display.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherbodyComponent,
    WeathersearchComponent,
    WeatherMainDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
