import type { Route } from '@angular/router'
import { RegisterComponent } from './register/register.component'
import { LogoutComponent } from './logout/logout.component'
import { LockScreenComponent } from './lock-screen/lock-screen.component'
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { RecoverPaswordComponent } from './recover-pasword/recover-pasword.component'
import { EmailVerifivationComponent } from './email-verifivation/email-verifivation.component'
import { RegistroUsuariosComponent } from '@views/auth/registro/registro-usuario.component'

export const AUTH_ROUTES: Route[] = [
  {
    path: 'auth/login',
    component: SignInComponent,
    data: { title: 'Login' },
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    data: { title: 'Logout' },
  },
  {
    path: 'auth/recoverpw',
    component: RecoverPaswordComponent,
    data: { title: 'Recover Password' },
  },

  {
    path: 'auth/lock-screen',
    component: LockScreenComponent,
    data: { title: 'Lock Screen' },
  },
  {
    path: 'auth/confirm-mail',
    component: ConfirmMailComponent,
    data: { title: 'Confirm Mail' },
  },
  {
    path: 'email-verification',
    component: EmailVerifivationComponent,
    data: { title: 'Email Verification' },
  },
  {
    path:'auth/registro-simposio',
    component:RegistroUsuariosComponent,
    data:{title: 'registro de simposio'}
  }
]
