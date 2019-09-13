import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CityWeather } from '../Model/ciryWeather';

@Injectable({ providedIn: 'root' })
export class GetWeatherService{
    appKey:string = "733d028bb2fce048680e2accb3879f6b";
    public cityWeather: CityWeather;

    constructor(private httpClient: HttpClient){
        
    }

    public searchWeather(city: string){
        let sourceUrl="https://api.openweathermap.org/data/2.5/weather";
        let params=new HttpParams().set("q",city+",israel").set("appid",this.appKey);
        this.httpClient.get<CityWeather>(sourceUrl, {params})
        .subscribe(data=>{
            this.cityWeather = data as CityWeather;
            this.cityWeather.weather[0].imageUrl="https://openweathermap.org/img/wn/"+this.cityWeather.weather[0].icon+"@2x.png";
        },
        (er: HttpErrorResponse) => {
            console.log (er.message);
          });
        
        
    }

    public getCityWeather(){
        return this.cityWeather;
    }

}