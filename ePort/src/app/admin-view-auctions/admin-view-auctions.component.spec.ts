import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAuctionsComponent } from './admin-view-auctions.component';

describe('AdminViewAuctionsComponent', () => {
  let component: AdminViewAuctionsComponent;
  let fixture: ComponentFixture<AdminViewAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAuctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
