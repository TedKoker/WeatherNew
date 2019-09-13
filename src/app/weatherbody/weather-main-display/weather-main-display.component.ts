import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from 'src/app/Services/GetWeatherService';
import { CityWeather } from 'src/app/Model/ciryWeather';

@Component({
  selector: 'app-weather-main-display',
  templateUrl: './weather-main-display.component.html',
  styleUrls: ['./weather-main-display.component.css']
})
export class WeatherMainDisplayComponent {
  cityWeather: CityWeather;
  dateOfNow: Date;

  constructor(private getWeatherService: GetWeatherService) {
      
   }

  ngOnInit() {
    this.cityWeather=this.getWeatherService.cityWeather;
    this.dateOfNow=new Date();
  }

}
