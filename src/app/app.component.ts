import { Component } from '@angular/core';
import { GetWeatherService } from './Services/GetWeatherService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherNew';

  constructor(private getWeatherService: GetWeatherService){}

  ngOnInit(){
    this.getWeatherService.searchWeather("Tel Aviv");
  }
}
