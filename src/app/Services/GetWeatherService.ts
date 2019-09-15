import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CityWeather } from '../Model/ciryWeather';
import { CityFiveDays } from '../Model/cityFiveDays';

@Injectable({ providedIn: 'root' })
export class GetWeatherService{
    private appKey:string = "733d028bb2fce048680e2accb3879f6b";
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
        /**
         * This method gets the information about 5 date forecast.
         * Becouse the api returns information about weather in every 3 hours in those day,
         * I take the weather in 12:00:00 (as the maximus tempeture),
         * and from 00:00:00 (as the minimum tempeture),
         * Also, I remove the information about this day, 
         * couse I already display it in the main display (called by method "searchWeather").
         */
        let sourceUrl="https://api.openweathermap.org/data/2.5/forecast";
        let params=new HttpParams().set("q",city+",IL").set("appid",this.appKey);
        this.httpClient.get<CityFiveDays>(sourceUrl, {params})
        .subscribe(data=>{
            this.cityFiveDays = data as CityFiveDays;
            for(let i=0; i<this.cityFiveDays.list.length; i++){
                let date = this.cityFiveDays.list[i].dt_txt.toString();
                if(!date.includes("12:00:00") && !date.includes("21:00:00")){
                    this.cityFiveDays.list.splice(i,1);
                    i--;
                }
                else{
                    this.cityFiveDays.list[i].dt_txt = new Date(date);
                    if(this.cityFiveDays.list[i].dt_txt.getDate()==new Date().getDate() && new Date().getHours()>12){
                        this.cityFiveDays.list.splice(i,1);
                        i--;
                    }
                }
            }
        },
        (er: HttpErrorResponse) => {
            console.log (er.message);
        });
    }

}