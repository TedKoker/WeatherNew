import { Component } from '@angular/core';
import { GetWeatherService } from './Services/GetWeatherService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiCityRequest: string;
  lat: number=undefined;
  lon: number=undefined;

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

  async ngOnInit() {
    /**
     * TO DO:
     * 1) Get users GPS location, and if I can not get it, set Tel Aviv as defult city.
     * 2) Put a pop up windows at the begining (after it loads from the server), and explain about the page
     */
    this.getWeatherService.searchWeather("Tel Aviv");
    this.getWeatherService.weatherForecast("Tel Aviv");
    try{
      await this.getPosition();
    }catch{
      console.log('continue');
    }
  
    
  }

  

  async getPosition(): Promise<number>
  {
    return await new Promise((resolve, reject) => {
         navigator.geolocation.getCurrentPosition(position => {
          resolve(this.lat = position.coords.latitude);
          resolve(this.lon = position.coords.longitude);  
    }, err=>{reject(err.message);}
    )})
  }
}
