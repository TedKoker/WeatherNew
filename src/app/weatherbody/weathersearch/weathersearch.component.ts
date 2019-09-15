import { Component, Output, EventEmitter } from '@angular/core';
import { CityService } from 'src/app/Services/CityService';



@Component({
  selector: 'app-weathersearch',
  templateUrl: './weathersearch.component.html',
  styleUrls: ['./weathersearch.component.css']
})

export class WeathersearchComponent {
  searchInput:string=""; //The string that the user types in the search box
  searchAutoComplete: string[]; //will hold the possible auto complete for the user
  @Output() searchInputEvent = new EventEmitter<string>();

  constructor(private cityService: CityService) { 
    this.searchAutoComplete=new Array<string>();
  }

  userType(){
    /**
     * Push to the searchAutocomplete evrything the includes what the user typed
     */
    this.searchAutoComplete=[];
    for(let i=0; i<this.cityService.cityArray.length; i++){
      if(this.cityService.cityArray[i].toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase()))
        this.searchAutoComplete.push(this.cityService.cityArray[i]);
    }
  }

  sendToApi(city: string){
    this.searchInputEvent.emit(city);
  }
}
