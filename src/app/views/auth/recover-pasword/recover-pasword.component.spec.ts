import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RecoverPaswordComponent } from './recover-pasword.component'

describe('RecoverPaswordComponent', () => {
  let component: RecoverPaswordComponent
  let fixture: ComponentFixture<RecoverPaswordComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverPaswordComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RecoverPaswordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
