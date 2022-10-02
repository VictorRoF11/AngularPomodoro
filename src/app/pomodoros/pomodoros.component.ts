import { Component, OnInit } from '@angular/core';
import { Datos } from '../Interfaces/timer.interface';

@Component({
  selector: 'app-pomodoros',
  templateUrl: './pomodoros.component.html',
  styleUrls: ['./pomodoros.component.css']
})
export class PomodorosComponent {

 datos: Datos[] = [
  {
    hora: "10:00 am",
    minutos: 25,
    tipo: "Pomodoro"
  },
  {
    hora: "11:00 am",
    minutos: 5,
    tipo: "Descanso"
  },
  {
    hora: "12:00 am",
    minutos: 25,
    tipo: "Pomodoro"
  },
  {
    hora: "12:00 am",
    minutos: 5,
    tipo: "Descanso"
  },
  {
    hora: "01:00 pm",
    minutos: 25,
    tipo: "Pomodoro"
  }
 ]

}
