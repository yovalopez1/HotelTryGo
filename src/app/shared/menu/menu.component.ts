import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',['$event'])onScrollEvent($event:any){
    if($event.srcElement.scrollingElement.scrollTop==0){
    let menu:any=document.getElementById("menu")
    menu.classList.add("menu")
    menu.classList.remove("menu2")

    }else{

      let menu:any=document.getElementById("menu")
      menu.classList.add("menu2")
      menu.classList.remove("menu")
 

    }
  }

}
