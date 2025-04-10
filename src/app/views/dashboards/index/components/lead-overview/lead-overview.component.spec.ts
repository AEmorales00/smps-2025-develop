import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadOverviewComponent } from './lead-overview.component';

describe('LeadOverviewComponent', () => {
  let component: LeadOverviewComponent;
  let fixture: ComponentFixture<LeadOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
