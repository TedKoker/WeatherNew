import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Services/CityService';
import { GetWeatherService } from 'src/app/Services/GetWeatherService';
import { Test } from 'src/app/Model/test';

@Component({
  selector: 'app-weathersearch',
  templateUrl: './weathersearch.component.html',
  styleUrls: ['./weathersearch.component.css']
})

export class WeathersearchComponent {
  cities: string[];

  constructor(private cityArray: CityService, private getWaetherSevice: GetWeatherService, private test:Test) { 
    this.cities=new Array<string>();
  }

  ngOnInit() {
  }

  printCities(){
    this.getWaetherSevice.citySearch();
  }

  do(){
    console.log(this.test.name);
  }

}
