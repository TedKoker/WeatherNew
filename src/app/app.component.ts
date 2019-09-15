import { Component } from '@angular/core';
import { GetWeatherService } from './Services/GetWeatherService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiCityRequest: string;

  constructor(private getWeatherService: GetWeatherService){}

  reciveApiCityRequest($event){
    this.apiCityRequest=$event;
    this.sendApiRequest(this.apiCityRequest);
  }

  sendApiRequest(city: string){
    this.getWeatherService.cityWeather=null;
    this.getWeatherService.cityFiveDays=null;
    this.getWeatherService.searchWeather(city);
    this.getWeatherService.weatherForecast(city);
  }
  
  checkIfComplete(){
    if(this.getWeatherService.cityWeather!= null && this.getWeatherService.cityFiveDays!=null){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit(){
    this.getWeatherService.searchWeather("Tel Aviv");
    this.getWeatherService.weatherForecast("Tel Aviv");
  }
}
