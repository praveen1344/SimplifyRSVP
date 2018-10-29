import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() emitSideView = new EventEmitter();
  title = 'RSVP';
  displayMenu: Boolean;
  constructor() {
  	this.displayMenu = false;
  }
  onClick(): void{
  	this.displayMenu = !this.displayMenu;
    this.emitSideView.emit(this.displayMenu);
  }
}
