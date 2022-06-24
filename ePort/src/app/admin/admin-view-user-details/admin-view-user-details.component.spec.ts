import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserDetailsComponent } from './admin-view-user-details.component';

describe('AdminViewUserDetailsComponent', () => {
  let component: AdminViewUserDetailsComponent;
  let fixture: ComponentFixture<AdminViewUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
