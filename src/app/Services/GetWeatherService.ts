import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CityWeather } from '../Model/ciryWeather';
import { CityService } from './CityService';

@Injectable({ providedIn: 'root' })
export class GetWeatherService{
    appKey:string = "733d028bb2fce048680e2accb3879f6b";
    cityWeather: CityWeather;

    constructor(private httpClient: HttpClient, private cityService: CityService){}

    citySearch(){
        
        let sourceUrl="https://api.openweathermap.org/data/2.5/weather";

        for(let i=this.cityService.cityArray.length/2; i<this.cityService.cityArray.length; i++){
            
            let params = new HttpParams().set("q",this.cityService.cityArray[i]).set("appid",this.appKey);
            this.httpClient.get<CityWeather>(sourceUrl,{params})
            .subscribe(data=>{
              this.cityWeather = data as CityWeather;
             },
             (err: HttpErrorResponse) => {
                console.log("in");
               console.log(this.cityService.cityArray[i]);
              }
             );
        }
        
    }
}