import { Component, OnInit } from '@angular/core';
import { CityFiveDays } from 'src/app/Model/cityFiveDays';
import { GetWeatherService } from 'src/app/Services/GetWeatherService';
import { FiveDaysForecast } from 'src/app/Model/fiveDaysForecast';

@Component({
  selector: 'app-weather-five-days',
  templateUrl: './weather-five-days.component.html',
  styleUrls: ['./weather-five-days.component.css']
})
export class WeatherFiveDaysComponent {
  cityFiveDays: CityFiveDays;
  fiveDayForecast: FiveDaysForecast[];
  constructor(private getWeatherService:GetWeatherService) { }

  ngOnInit() {
    this.cityFiveDays=this.getWeatherService.cityFiveDays;
    this.fiveDayForecast=new Array<FiveDaysForecast>();
    for(let i=0; i<this.cityFiveDays.list.length; i+=2){
      //importent to remember that even index number is night, and odd index number is day
      this.fiveDayForecast.push(new FiveDaysForecast(this.cityFiveDays.list[i],this.cityFiveDays.list[i+1]));
    }
  }

}
