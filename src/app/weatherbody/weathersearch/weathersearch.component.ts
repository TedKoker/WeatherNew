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
  emptySearchBar: boolean = false //will be getting true if the user pressed 'search' on an empty bar search
  searchBarPlaceHolder: string="Type a city"; //the input will change with the user's errors

  constructor(private cityService: CityService) { 
    this.searchAutoComplete=new Array<string>();
  }

  userType(){
    /**
     * Push to the searchAutocomplete evrything the includes what the user typed
     */
    this.emptySearchBar=false;
    this.searchBarPlaceHolder="Type a city";
    this.searchAutoComplete=[];
    for(let i=0; i<this.cityService.cityArray.length; i++){
      if(this.cityService.cityArray[i].toLocaleLowerCase().includes(this.removeExtraSpaceBar(this.searchInput.toLocaleLowerCase())))
        this.searchAutoComplete.push(this.cityService.cityArray[i]);
    }
  }

  sendToApi(city: string){
    if(city!=null && city!=""){
      if(this.searchCaseInsesitive(this.cityService.cityArray, city=this.removeExtraSpaceBar(city))){
        this.searchInputEvent.emit(city);
      }
      else{
        this.searchBarPlaceHolder="Use only cities from the auto-complete";
        this.emptySearchBar=true;
        this.searchInput="";
      }
    }
    else{
      this.searchBarPlaceHolder="Please.. Type a city for the server.."
      this.emptySearchBar=true;
    }
  }

  searchCaseInsesitive(array:string[], item: string){
    /**
     * The function is made for the case when we need to check if item exists in string[],
     * and we need it case insetsitive.
     */
    let found: boolean = false;
    item=item.toString();
    for(let i=0; i<array.length; i++){
      if(array[i].toLowerCase()==item.toLowerCase()){
        found=true;
      }
    }

    return found;
  }

  removeExtraSpaceBar(world: string) : string{
    /**
     * this method is created to remove extra space bat, and search the city
     * that the user wanted to search, even if he\she typed one or more extra space bars
     */
    let worldArrey =world.split('');
    for(let i=0; i<world.length; i++){
      if(i==0 && worldArrey[i]==' '){
        worldArrey.splice(i,1);
        i--;
      }
      if(i==worldArrey.length-1 && worldArrey[i]==' '){
        worldArrey.splice(i,1);
        i-=2;
      }

      if(i+1<worldArrey.length){
        if(worldArrey[i]==' '&&worldArrey[i+1]==' '){
          worldArrey.splice(i,1);
          i--; 
        }
      }
    }
    world=worldArrey.join('');
    return world;
  }

  keyDown(event: KeyboardEvent) {
    console.log(event.DOM_KEY_LOCATION_NUMPAD);
  } 
}
