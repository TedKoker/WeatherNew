import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weatherbody',
  templateUrl: './weatherbody.component.html',
  styleUrls: ['./weatherbody.component.css']
})
export class WeatherbodyComponent {

  searchDone:boolean = false;
  sendToApi: string;
 
  @Output() sendToApiEvent = new EventEmitter<string>();

  constructor() { }

  async reciveAndSend($event){
    this.searchDone=true;
    console.log(this.searchDone);
    await this.delay(250);
    this.sendToApi=$event;
    this.sendToApiEvent.emit(this.sendToApi);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  ngOnInit() {
    
  }

}
