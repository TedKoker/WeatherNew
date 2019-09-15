import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weatherbody',
  templateUrl: './weatherbody.component.html',
  styleUrls: ['./weatherbody.component.css']
})
export class WeatherbodyComponent {

  sendToApi: string;
  @Output() sendToApiEvent = new EventEmitter<string>();

  constructor() { }

  reciveAndSend($event){
    this.sendToApi=$event;
    this.sendToApiEvent.emit(this.sendToApi);
  }

  ngOnInit() {
    
  }

}
