import { AuthenticationService } from '@/app/services/auth.service'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { Router, RouterLink } from '@angular/router'
import { currentYear } from '@common/constants'
import { Store } from '@ngrx/store'
import { login } from '@store/authentication/authentication.actions'
import { getError } from '@store/authentication/authentication.selector'
import { LoginService } from './sign-in.service'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-sign-in',
    imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule, NgbCarouselModule],
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  currentYear = currentYear
  signInForm!: UntypedFormGroup
  submitted: boolean = false

  errorMessage: string = ''

  public fb = inject(UntypedFormBuilder)
  public store = inject(Store)
  public service = inject(AuthenticationService)

  constructor(private loginService:LoginService, private route:Router){

  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  get formValues() {
    return this.signInForm.controls
  }

  login() {
    this.submitted = true
    if (this.signInForm.valid) {
      const username = this.formValues['email'].value // Get the username from the form
      const password = this.formValues['password'].value // Get the password from the form
       const login = {username, password}
      // Login Api
      this.service.postLogin(login)
        .then(response =>{
          this.route.navigate(['index'])
        })
      //this.store.dispatch(login({ email: email, password: password }))

      this.store.select(getError).subscribe((data) => {
        if (data) {
          this.errorMessage = data.error.message

          setTimeout(() => {
            this.errorMessage = ''
          }, 3000)
        }
      })
    }
  }
}
