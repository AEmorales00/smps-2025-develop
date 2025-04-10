import type { ActionReducerMap } from '@ngrx/store'
import {
  calendarReducer,
  type CalendarState,
} from './calendar/calendar.reducer'
import {
  authenticationReducer,
  type AuthenticationState,
} from './authentication/authentication.reducer'

export interface RootReducerState {
  authentication: AuthenticationState
  Calendar: CalendarState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  authentication: authenticationReducer,
  Calendar: calendarReducer,
}
