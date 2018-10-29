import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-simplifyRSVP';
  displayMenu: Boolean;

  dispMenu(evt) : void{
  	this.displayMenu = evt;
  }
}
