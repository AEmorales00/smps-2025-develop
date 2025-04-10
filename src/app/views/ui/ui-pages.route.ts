import type { Route } from '@angular/router'
import { AlertsComponent } from './alerts/alerts.component'
import { BadgesComponent } from './badges/badges.component'
import { BreadcrumbsComponent } from './breadcrumb/breadcrumb.component'
import { ButtonsComponent } from './buttons/buttons.component'
import { CardsComponent } from './cards/cards.component'
import { CollapseComponent } from './collapse/collapse.component'
import { GridComponent } from './grid/grid.component'
import { ListGroupComponent } from './list-group/list-group.component'
import { ModalsComponent } from './modals/modals.component'
import { PaginationComponent } from './pagination/pagination.component'
import { ProgressComponent } from './progress/progress.component'
import { ScrollspyComponent } from './scrollspy/scrollspy.component'
import { TabsComponent } from './tabs/tabs.component'
import { TypographyComponent } from './typography/typography.component'
import { AccordionComponent } from './accordion/accordion.component'
import { DropdownComponent } from './dropdown/dropdown.component'
import { PlaceholderComponent } from './placeholder/placeholder.component'
import { SpinnerComponent } from './spinner/spinner.component'
import { TooltipComponent } from './tooltip/tooltip.component'
import { EmbedVideoComponent } from './embed-video/embed-video.component'
import { ImagesComponent } from './images/images.component'
import { PopoverComponent } from './popover/popover.component'

export const UI_PAGES_ROUTES: Route[] = [
  {
    path: 'accordions',
    component: AccordionComponent,
    data: { title: 'Accordions' },
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    data: { title: 'Alerts' },
  },

  {
    path: 'badges',
    component: BadgesComponent,
    data: { title: 'Badge' },
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbsComponent,
    data: { title: 'Breadcrumb' },
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: { title: 'buttons' },
  },
  {
    path: 'cards',
    component: CardsComponent,
    data: { title: 'Cards' },
  },

  {
    path: 'collapse',
    component: CollapseComponent,
    data: { title: 'Collapse' },
  },
  {
    path: 'dropdowns',
    component: DropdownComponent,
    data: { title: 'Dropdowns' },
  },
  {
    path: 'video',
    component: EmbedVideoComponent,
    data: { title: 'Video' },
  },

  {
    path: 'grid',
    component: GridComponent,
    data: { title: 'Grid' },
  },
  {
    path: 'images',
    component: ImagesComponent,
    data: { title: 'Images' },
  },

  {
    path: 'list',
    component: ListGroupComponent,
    data: { title: 'List Group' },
  },
  {
    path: 'modals',
    component: ModalsComponent,
    data: { title: 'Modals' },
  },

  {
    path: 'placeholders',
    component: PlaceholderComponent,
    data: { title: 'Placeholders' },
  },
  {
    path: 'pagination',
    component: PaginationComponent,
    data: { title: 'Pagination' },
  },
  {
    path: 'popovers',
    component: PopoverComponent,
    data: { title: 'Popover' },
  },

  {
    path: 'progress',
    component: ProgressComponent,
    data: { title: 'Progress' },
  },
  {
    path: 'scrollspy',
    component: ScrollspyComponent,
    data: { title: 'Scrollspy' },
  },
  {
    path: 'spinners',
    component: SpinnerComponent,
    data: { title: 'Spinners' },
  },
  {
    path: 'tabs',
    component: TabsComponent,
    data: { title: 'Tabs' },
  },
  {
    path: 'tooltips',
    component: TooltipComponent,
    data: { title: 'Tooltips' },
  },
  {
    path: 'typography',
    component: TypographyComponent,
    data: { title: 'Typography' },
  },
]
