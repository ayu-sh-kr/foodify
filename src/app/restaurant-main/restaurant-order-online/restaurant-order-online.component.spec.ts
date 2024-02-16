import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOrderOnlineComponent } from './restaurant-order-online.component';

describe('RestaurantOrderOnlineComponent', () => {
  let component: RestaurantOrderOnlineComponent;
  let fixture: ComponentFixture<RestaurantOrderOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantOrderOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantOrderOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
