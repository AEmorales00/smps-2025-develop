import { EventInput } from '@fullcalendar/core'

export type externalModel = {
  id: number
  textClass: string
  className: string
  title: string
}

const defaultEvents: EventInput[] = [
  {
    id: '1',
    title: 'Interview - Backend Engineer',
    start: new Date(),
    className: 'event-primary',
  },
  {
    id: '2',
    title: 'Meeting with CT Team',
    start: new Date(Date.now() + 13000000),
    className: 'event-warning',
  },
  {
    id: '3',
    title: 'Meeting with Mr. Larkon',
    start: new Date(Date.now() + 308000000),
    end: new Date(Date.now() + 338000000),
    className: 'event-info',
  },
  {
    id: '4',
    title: 'Interview - Frontend Engineer',
    start: new Date(Date.now() + 60570000),
    end: new Date(Date.now() + 153000000),
    className: 'event-secondary',
  },
  {
    id: '5',
    title: 'Phone Screen - Frontend Engineer',
    start: new Date(Date.now() + 168000000),
    className: 'event-danger',
  },
  {
    id: '6',
    title: 'Buy Design Assets',
    start: new Date(Date.now() + 330000000),
    end: new Date(Date.now() + 330800000),
    className: 'event-primary',
  },
  {
    id: '7',
    title: 'Setup Github Repository',
    start: new Date(Date.now() + 1008000000),
    end: new Date(Date.now() + 1108000000),
    className: 'event-danger',
  },
  {
    id: '8',
    title: 'Meeting with Mr. Shreyu',
    start: new Date(Date.now() + 2508000000),
    end: new Date(Date.now() + 2508000000),
    className: 'event-secondary',
  },
]

// external events
const externalEvents: externalModel[] = [
  {
    id: 1,
    textClass: 'text-success',
    className: 'success',
    title: 'New Event Planing ',
  },
  {
    id: 2,
    textClass: 'text-info',
    className: 'info',
    title: 'Meeting',
  },
  {
    id: 3,
    textClass: 'text-warning',
    className: 'warning',
    title: 'Generating Reports',
  },
  {
    id: 4,
    textClass: 'text-danger',
    className: 'danger',
    title: 'Create New theme',
  },
]

export { defaultEvents, externalEvents }
