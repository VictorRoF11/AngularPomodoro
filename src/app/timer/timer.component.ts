import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {


  minutos: number = 25;

  segundos: number = 0;

  comenzarTimer() {

  }

}
