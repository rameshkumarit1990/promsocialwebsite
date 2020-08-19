import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketModalComponent } from './market-modal.component';

describe('MarketModalComponent', () => {
  let component: MarketModalComponent;
  let fixture: ComponentFixture<MarketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
