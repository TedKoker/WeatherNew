import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CityWeather } from '../Model/ciryWeather';
import { CityFiveDays } from '../Model/cityFiveDays';

@Injectable({ providedIn: 'root' })
export class GetWeatherService{
    appKey:string = "733d028bb2fce048680e2accb3879f6b";
    cityWeather: CityWeather;
    cityFiveDays: CityFiveDays;

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

    public weatherForecast(city: string){
        let sourceUrl="https://api.openweathermap.org/data/2.5/forecast";
        let params=new HttpParams().set("q",city+",israel").set("appid",this.appKey);
        this.httpClient.get<CityFiveDays>(sourceUrl, {params})
        .subscribe(data=>{
            this.cityFiveDays = data as CityFiveDays;
            for(let i=0; i<this.cityFiveDays.list.length; i++){
                this.cityFiveDays.list[i].dt_txt = new Date(this.cityFiveDays.list[i].dt_txt);
                console.log(this.cityFiveDays.list[i].dt_txt.getHours());
                /*if(this.cityFiveDays.list[i].dt_txt.getHours()!=12 && this.cityFiveDays.list[i].dt_txt.getHours()!=0){

                }*/
            }
            console.log("finish forecast subscribe");
        });
    }

}