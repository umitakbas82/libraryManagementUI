import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from "./main/main.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NavbarComponent,
        FooterComponent,
        MainComponent,
        SidenavComponent,
        RouterModule,
        PagenotfoundComponent
        
    ]
})
export class AppComponent {
  title = 'libraryManagementUI';
}
