import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFilterComponent } from './order-filter.component';

describe('OverviewFilterComponent', () => {
  let component: OrderFilterComponent;
  let fixture: ComponentFixture<OrderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});