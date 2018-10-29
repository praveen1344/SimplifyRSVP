import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjectListComponent } from './form-object-list.component';

describe('FormObjectListComponent', () => {
  let component: FormObjectListComponent;
  let fixture: ComponentFixture<FormObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
