import { Anime } from './../anime_list';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent{

  @Input() anime!: Anime;

  // Adding New Event Emit 
  @Output() notify = new EventEmitter();

}
