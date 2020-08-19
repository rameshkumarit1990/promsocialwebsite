import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCheckboxComponent } from './group-checkbox.component';

describe('GroupCheckboxComponent', () => {
  let component: GroupCheckboxComponent;
  let fixture: ComponentFixture<GroupCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
