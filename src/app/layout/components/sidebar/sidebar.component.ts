import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core'
import { SimplebarAngularModule } from 'simplebar-angular'
import { MENU_ITEMS, MenuItemType } from '../../../common/menu.meta'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import { findAllParent, findMenuItem } from '../../../helper/utils'
import { basePath } from '@common/constants'

@Component({
    selector: 'app-sidebar',
    imports: [
        SimplebarAngularModule,
        RouterModule,
        CommonModule,
        NgbCollapseModule,
    ],
    templateUrl: './sidebar.component.html',
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent implements OnInit, AfterViewInit {
  menuItems: MenuItemType[] = []
  activeMenuItems: string[] = []
  router = inject(Router)
  trimmedURL = this.router.url?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.trimmedURL = this.router.url?.replaceAll(
          basePath !== '' ? basePath + '/' : '',
          '/'
        )
        this._activateMenu()
      }
    })
  }
  ngOnInit(): void {
    this.initMenu()
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._activateMenu()
    })
  }
  initMenu(): void {
    this.menuItems = MENU_ITEMS
  }

  getFeatherIcon(icon: string): string {
    const icons = window['feather'].icons as Record<string, any>
    return icons[icon]?.toSvg() || ''
  }

  hasSubmenu(menu: MenuItemType): boolean {
    return menu.children ? true : false
  }

  _activateMenu(): void {
    const div = this.el.nativeElement.querySelector('.app-sidebar-menu')
    let matchingMenuItem: any = null

    if (div) {
      const items = div.getElementsByClassName('nav-link-ref')
      for (let i = 0; i < items.length; ++i) {
        if (
          this.trimmedURL === items[i].pathname ||
          (this.trimmedURL.startsWith('/invoice/') &&
            items[i].pathname === '/invoice/RB6985') ||
          (this.trimmedURL.startsWith('/ecommerce/product/') &&
            items[i].pathname === '/ecommerce/product/1')
        ) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('aria-controls')
        const activeMt = findMenuItem(this.menuItems, mid)

        if (activeMt) {
          const matchingObjs = [
            activeMt['key'],
            ...findAllParent(this.menuItems, activeMt),
          ]

          this.activeMenuItems = matchingObjs
          this.menuItems.forEach((menu: MenuItemType) => {
            menu.collapsed = !matchingObjs.includes(menu.key!)
          })
        }
      }
    }
  }

  /**
   * toggles open menu
   * @param menuItem clicked menuitem
   * @param collapse collpase instance
   */
  toggleMenuItem(menuItem: MenuItemType, collapse: NgbCollapse): void {
    collapse.toggle()
    let openMenuItems: string[]
    if (!menuItem.collapsed) {
      openMenuItems = [
        menuItem['key'],
        ...findAllParent(this.menuItems, menuItem),
      ]
      this.menuItems.forEach((menu: MenuItemType) => {
        if (!openMenuItems.includes(menu.key!)) {
          menu.collapsed = true
        }
      })
    }
  }
}
