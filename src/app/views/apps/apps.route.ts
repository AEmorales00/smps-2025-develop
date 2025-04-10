import type { Route } from '@angular/router'
import { CalendarComponent } from './calendar/calendar.component'
import { ContactComponent } from './contact/contact.component'
import { TodoComponent } from './todo/todo.component'

export const APPS_ROUTES: Route[] = [
  {
    path: 'calendar',
    component: CalendarComponent,
    data: { title: 'Calendar' },
  },
  {
    path: 'contacts',
    component: ContactComponent,
    data: { title: 'Email' },
  },
  {
    path: 'todolist',
    component: TodoComponent,
    data: { title: 'File Manager' },
  },
]
