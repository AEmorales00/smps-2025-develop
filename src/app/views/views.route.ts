import type { Route } from '@angular/router'
import { IndexComponent } from './dashboards/index/index.component'
import { RegistroAsistenComponent } from './dashboards/registro-asistente/registro-asistente.component'
import { BuscadorComponent } from './dashboards/buscador/buscador.component'
// import { DashboardComponent } from './dashboard/dashboard.component'

export const VIEWS_ROUTES: Route[] = [
  {
    path: 'ui',
    loadChildren: () =>
      import('./ui/ui-pages.route').then((mod) => mod.UI_PAGES_ROUTES),
  },

  {
    path: 'apps',
    loadChildren: () =>
      import('./apps/apps.route').then((mod) => mod.APPS_ROUTES),
  },
  {
    path: 'index',
    component: IndexComponent,
    data: { title: 'Index' },
  },
  {
    path: 'registro-simposio',
    component: RegistroAsistenComponent,
    data: { title: 'registro' },
  },
  {
    path: 'buscador',
    component: BuscadorComponent,
    data: { title: 'buscador' },
  }

]
