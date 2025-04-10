export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  parentKey?: string
  isDisabled?: boolean
  collapsed?: boolean
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'nav',
    label: 'MENU',
    isTitle: true,
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'home',
    collapsed: false,
    children: [
      {
        key: 'dashboard-home',
        label: 'Home',
        url: '/index',
        parentKey: 'dashboard',
      }
    ],
  },
]
