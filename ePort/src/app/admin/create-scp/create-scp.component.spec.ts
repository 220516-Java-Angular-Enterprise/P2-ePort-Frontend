import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScpComponent } from './create-scp.component';

describe('CreateScpComponent', () => {
  let component: CreateScpComponent;
  let fixture: ComponentFixture<CreateScpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateScpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
