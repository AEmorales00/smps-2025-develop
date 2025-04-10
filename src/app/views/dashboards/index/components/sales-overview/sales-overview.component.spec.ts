import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverviewComponent } from './sales-overview.component';

describe('SalesOverviewComponent', () => {
  let component: SalesOverviewComponent;
  let fixture: ComponentFixture<SalesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
