import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFeildComponent } from './address-feild.component';

describe('AddressFeildComponent', () => {
  let component: AddressFeildComponent;
  let fixture: ComponentFixture<AddressFeildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFeildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
