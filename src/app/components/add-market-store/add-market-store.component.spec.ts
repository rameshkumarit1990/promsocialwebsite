import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketStoreComponent } from './add-market-store.component';

describe('AddMarketStoreComponent', () => {
  let component: AddMarketStoreComponent;
  let fixture: ComponentFixture<AddMarketStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
