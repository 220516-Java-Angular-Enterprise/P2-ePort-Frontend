import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingHistoryComponent } from './bidding-history.component';

describe('BiddingHistoryComponent', () => {
  let component: BiddingHistoryComponent;
  let fixture: ComponentFixture<BiddingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
