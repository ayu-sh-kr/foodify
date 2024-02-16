import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPhotoComponent } from './restaurant-photo.component';

describe('RestaurantPhotoComponent', () => {
  let component: RestaurantPhotoComponent;
  let fixture: ComponentFixture<RestaurantPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
