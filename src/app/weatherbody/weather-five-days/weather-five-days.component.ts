import { Component, OnInit } from '@angular/core';
import { CityFiveDays } from 'src/app/Model/cityFiveDays';
import { GetWeatherService } from 'src/app/Services/GetWeatherService';

@Component({
  selector: 'app-weather-five-days',
  templateUrl: './weather-five-days.component.html',
  styleUrls: ['./weather-five-days.component.css']
})
export class WeatherFiveDaysComponent {
  cityFiveDays: CityFiveDays;
  constructor(private getWeatherService:GetWeatherService) { }

  ngOnInit() {
    this.cityFiveDays=this.getWeatherService.cityFiveDays;
  }

}
