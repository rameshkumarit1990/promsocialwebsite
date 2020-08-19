import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketStoreFormsComponent } from './market-store-forms.component';

describe('MarketStoreFormsComponent', () => {
  let component: MarketStoreFormsComponent;
  let fixture: ComponentFixture<MarketStoreFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketStoreFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketStoreFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
