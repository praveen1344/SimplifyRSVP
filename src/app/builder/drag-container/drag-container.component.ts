import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-container',
  templateUrl: './drag-container.component.html',
  styleUrls: ['./drag-container.component.css']
})
export class DragContainerComponent implements OnInit {
  data: Object = null;
  constructor() { 
  	this.data = {
  		id: '1',
  		type:'dropdown',
  		placeholder: 'Enter experience',
  		value: [1,2,3,4]
  	}
  }

  ngOnInit() {
  }
  drag(evt): void{
  	console.log('Drag STart');
  	console.log(evt);
  	console.log(this.data);
  }
}
