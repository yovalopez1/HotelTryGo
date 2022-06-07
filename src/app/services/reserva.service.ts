import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url='https://apiglobant1.herokuapp.com/api/v1/reserva/6273f3c38de3a2d07fc7e397'
  constructor(
    private http:HttpClient
  ) { 

  }
  getReservas(){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')
    return this.http.get(this.url,{
      headers: header
    });
  }
}
