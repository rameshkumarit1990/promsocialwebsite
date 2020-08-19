import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMediaFieldComponent } from './multi-media-field.component';

describe('MultiMediaFieldComponent', () => {
  let component: MultiMediaFieldComponent;
  let fixture: ComponentFixture<MultiMediaFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiMediaFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiMediaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
