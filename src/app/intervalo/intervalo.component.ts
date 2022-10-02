import { Component, Input, OnInit } from '@angular/core';
import { Datos } from '../Interfaces/timer.interface';


@Component({
  selector: 'app-intervalo',
  templateUrl: './intervalo.component.html',
  styleUrls: ['./intervalo.component.css']
})
export class IntervaloComponent {


  @Input() dato: Datos = {
    hora: "10:00 am",
    minutos: 5,
    tipo: "Pomodoro"
  } 

}
