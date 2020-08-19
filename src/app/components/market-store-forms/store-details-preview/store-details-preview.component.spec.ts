import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailsPreviewComponent } from './store-details-preview.component';

describe('StoreDetailsPreviewComponent', () => {
  let component: StoreDetailsPreviewComponent;
  let fixture: ComponentFixture<StoreDetailsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
