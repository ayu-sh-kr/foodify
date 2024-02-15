import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSubHeaderComponent } from './restaurant-sub-header.component';

describe('RestaurantHeaderComponent', () => {
  let component: RestaurantSubHeaderComponent;
  let fixture: ComponentFixture<RestaurantSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantSubHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
