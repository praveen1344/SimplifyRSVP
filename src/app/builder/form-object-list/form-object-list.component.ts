import { Component, OnInit } from '@angular/core';
import { formListObjs } from '../../mock/mock-formList';

@Component({
  selector: 'app-form-object-list',
  templateUrl: './form-object-list.component.html',
  styleUrls: ['./form-object-list.component.css']
})
export class FormObjectListComponent implements OnInit {
  
  formListObjs = formListObjs;
  constructor() { }

  ngOnInit() {
  }

}
