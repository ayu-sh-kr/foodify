import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderContentComponent } from './order-content.component';

describe('OverviewContentComponent', () => {
  let component: OrderContentComponent;
  let fixture: ComponentFixture<OrderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
