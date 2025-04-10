import { MenuItemType } from '@common/menu.meta'

export const findAllParent = (
  menuItems: MenuItemType[],
  menuItem: any
): any => {
  let parents = []
  const parent = findMenuItem(menuItems, menuItem['parentKey'])

  if (parent) {
    parents.push(parent['key'])
    if (parent['parentKey'])
      parents = [...parents, ...findAllParent(menuItems, parent)]
  }
  return parents
}

export const findMenuItem = (
  menuItems: MenuItemType[],
  menuItemKey: string
): any => {
  if (menuItems && menuItemKey) {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i]
      }
      var found = findMenuItem(menuItems[i].children!, menuItemKey)
      if (found) return found
    }
  }
  return null
}

type AddOrSubtractFromDate = (
  days: number,
  add?: boolean,
  startingDate?: Date
) => Date

export const addOrSubtractDaysFromDate: AddOrSubtractFromDate = (
  days,
  add,
  startingDate = new Date()
) => {
  if (add) return new Date(new Date().setDate(startingDate.getDate() + days))
  else return new Date(new Date().setDate(startingDate.getDate() - days))
}

export const addOrSubtractMinutesFromDate: AddOrSubtractFromDate = (
  minutes,
  add,
  startingDate = new Date()
) => {
  if (add)
    return new Date(new Date().setMinutes(startingDate.getMinutes() + minutes))
  else
    return new Date(new Date().setMinutes(startingDate.getMinutes() - minutes))
}

const eventDate = new Date('Dec 17, 2025 12:00:01')

export const calculateTimeToEvent = () => {
  const currentDate = new Date()

  const timeRemaining = eventDate.getTime() - currentDate.getTime()

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export const splitArray = (array: Array<any>, chunkSize: number) => {
  const chunks = Array(Math.ceil(array.length / chunkSize))
    .fill(1)
    .map((_, index) => index * chunkSize)
    .map((begin) => array.slice(begin, begin + chunkSize))
  return chunks
}
