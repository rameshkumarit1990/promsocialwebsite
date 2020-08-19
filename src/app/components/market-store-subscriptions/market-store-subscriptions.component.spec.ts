import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketStoreSubscriptionsComponent } from './market-store-subscriptions.component';

describe('MarketStoreSubscriptionsComponent', () => {
  let component: MarketStoreSubscriptionsComponent;
  let fixture: ComponentFixture<MarketStoreSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketStoreSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketStoreSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
