import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http'
import { DecimalPipe } from '@angular/common'
import { CookieService } from 'ngx-cookie-service'
import { BrowserModule } from '@angular/platform-browser'
import { rootReducer } from './store'
import { AuthenticationEffects } from '@store/authentication/authentication.effects'
import { CalendarEffects } from '@store/calendar/calendar.effects'
import { provideEffects } from '@ngrx/effects'
import { FeatherModule } from 'angular-feather'
import { icons } from 'feather-icons'
import { allIcons } from 'angular-feather/icons'
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeatures: InMemoryScrollingFeature =
  withInMemoryScrolling (scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    DecimalPipe,
    CookieService,
    provideZoneChangeDetection({   eventCoalescing: false,
      runCoalescing: false,
      ignoreChangesOutsideZone: true,}),
    provideRouter(routes,inMemoryScrollingFeatures),
    provideStore(rootReducer, { metaReducers: [] }),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(AuthenticationEffects, CalendarEffects),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    importProvidersFrom(FeatherModule.pick(allIcons)),
  ],
}
