import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusForbiddenComponent } from './status-forbidden.component';

describe('StatusForbiddenComponent', () => {
  let component: StatusForbiddenComponent;
  let fixture: ComponentFixture<StatusForbiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusForbiddenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
