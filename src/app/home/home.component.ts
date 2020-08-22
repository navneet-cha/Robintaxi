import { Component, OnInit } from '@angular/core';

declare var openNav;
declare var closeNav;
@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CallopenNav(){
    openNav();
  }
  CallcloseNav(){
    closeNav();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
