import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPreviewComponent } from './desktop-preview.component';

describe('DesktopPreviewComponent', () => {
  let component: DesktopPreviewComponent;
  let fixture: ComponentFixture<DesktopPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
