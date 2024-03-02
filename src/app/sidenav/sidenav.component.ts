import { Component } from '@angular/core';
export interface NavigationItem{
  value:string;
  link:string
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {


  panelName:string="Sudent Panel"
  navItems:NavigationItem []=[]

  constructor(){

    this.navItems=[
      {value:"Viev Books", link:"viev-books"},
      {value:"My Orders", link:"my-orders"}
    ]
  }
}
