import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EmailVerifivationComponent } from './email-verifivation.component'

describe('EmailVerifivationComponent', () => {
  let component: EmailVerifivationComponent
  let fixture: ComponentFixture<EmailVerifivationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerifivationComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(EmailVerifivationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
