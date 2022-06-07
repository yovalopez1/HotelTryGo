import { Component } from '@angular/core';
import { ReservaService } from './services/reserva.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelTryGo';
  constructor(
    private reservaService:ReservaService
  ){
    this.reservaService.getReservas().subscribe(resp=>{
      console.log(resp)
    })
  }
}
