import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  titulo:String="Edison"
  habitaciones:any[]=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
