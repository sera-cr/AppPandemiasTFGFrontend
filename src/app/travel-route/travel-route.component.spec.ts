import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRouteComponent } from './travel-route.component';

describe('TravelRouteComponent', () => {
  let component: TravelRouteComponent;
  let fixture: ComponentFixture<TravelRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
