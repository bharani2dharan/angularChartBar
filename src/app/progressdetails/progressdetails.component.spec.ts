import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressdetailsComponent } from './progressdetails.component';

describe('ProgressdetailsComponent', () => {
  let component: ProgressdetailsComponent;
  let fixture: ComponentFixture<ProgressdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
