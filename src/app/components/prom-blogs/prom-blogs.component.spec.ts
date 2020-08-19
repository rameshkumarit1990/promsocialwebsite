import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromBlogsComponent } from './prom-blogs.component';

describe('PromBlogsComponent', () => {
  let component: PromBlogsComponent;
  let fixture: ComponentFixture<PromBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
