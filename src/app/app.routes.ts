import { Router, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { AuthLayoutComponent } from './auth-layout/auth-layout.component'
import { EmailVerifivationComponent } from '@views/auth/email-verifivation/email-verifivation.component'
import { ErrorLayoutComponent } from './error-layout/error-layout.component'
import { AuthenticationService } from './services/auth.service'
import { inject } from '@angular/core'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
    canActivate: [
      (url: any) => {
        const router = inject(Router)
        const authService = inject(AuthenticationService)
        if (!authService.session) {
          return router.createUrlTree(['/auth/login'], {
            queryParams: { returnUrl: url._routerState.url },
          })
        }
        return true
      }
    ]
  },

  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
]
