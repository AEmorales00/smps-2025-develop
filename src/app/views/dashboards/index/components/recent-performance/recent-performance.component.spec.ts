import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPerformanceComponent } from './recent-performance.component';

describe('RecentPerformanceComponent', () => {
  let component: RecentPerformanceComponent;
  let fixture: ComponentFixture<RecentPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
