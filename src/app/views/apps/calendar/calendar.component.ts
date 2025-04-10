import { Component, inject } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { FullCalendarModule } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
// import bootstrapPlugin from '@fullcalendar/bootstrap'
import listPlugin from '@fullcalendar/list'
import interactionPlugin, {
  DateClickArg,
  Draggable,
} from '@fullcalendar/interaction'
import { CalendarOptions, EventInput } from '@fullcalendar/core/index.js'
import { Store } from '@ngrx/store'
import { fetchCalendar } from '@store/calendar/calendar.actions'
import { getEvents } from '@store/calendar/calendar.selectors'
@Component({
    selector: 'app-calendar',
    imports: [BreadcrumbComponent, FullCalendarModule],
    templateUrl: './calendar.component.html',
    styles: ``
})
export class CalendarComponent {
  private store = inject(Store)
  calendarEvents!: EventInput[]

  ngOnInit() {
    // Fetch Calendar Event
    this.store.dispatch(fetchCalendar())
    this.store.select(getEvents).subscribe((data) => {
      this.calendarEvents = data
    })
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      center: 'title',
      left: 'prev,next today',
    },
    bootstrapFontAwesome: false,
    buttonText: {
      today: 'Today',
      month: 'Month',
      week: 'Week',
      day: 'Day',
      list: 'List',
      prev: 'Prev',
      next: 'Next',
    },
    themeSystem: 'bootstrap',
    initialView: 'dayGridMonth',
    weekends: true,
    weekNumbers: true,
    initialEvents: this.calendarEvents,
    droppable: true,
    editable: true,
    selectable: true,
  }
}
