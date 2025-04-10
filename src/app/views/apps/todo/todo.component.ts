import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  PipeTransform,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { tasks, taskType } from './data'
import { NgbdSortableHeader } from '@common/sortable.directive'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

export type SortColumn = keyof taskType | ''
export type SortDirection = 'asc' | 'desc' | ''
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0

export interface SortEvent {
  column: SortColumn
  direction: SortDirection
}

@Directive({
  selector: 'th[sortable]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdCustomSortableHeader {
  @Input() sortable: SortColumn = ''
  @Input() direction: SortDirection = ''
  @Output() sort = new EventEmitter<SortEvent>()

  rotate() {
    this.direction = rotate[this.direction]
    this.sort.emit({ column: this.sortable, direction: this.direction })
  }
}

@Component({
    selector: 'app-todo',
    imports: [BreadcrumbComponent, NgbdSortableHeader, FormsModule,CommonModule],
    templateUrl: './todo.component.html',
    styles: ``
})
export class TodoComponent {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<
    NgbdSortableHeader<taskType>
  >

  todoData = tasks
  alltodoData = tasks
  rowsToShow: number = 10
  filteredEntries: number = 0
  totalEntries: number = 0
  ngOnInit(): void {
    this.totalEntries = this.alltodoData.length

    this.updateDisplayedData()
  }

  onRowsChange(event: any): void {
    this.rowsToShow = +event.target.value
    this.updateDisplayedData()
  }

  updateDisplayedData(): void {
    this.todoData = this.alltodoData.slice(0, this.rowsToShow)
    this.filteredEntries = this.todoData.length
  }

  onSort({ column, direction }: SortEvent) {
    // Resetting other headers
    for (const header of this.headers) {
      if (header.sortable !== column) {
        header.direction = ''
      }
    }

    // Sorting logic
    if (direction === '' || column === '') {
      this.todoData = tasks
    } else {
      this.todoData = [...tasks].sort((a, b) => {
        const aValue = a[column]
        const bValue = b[column]

        // Handle cases where aValue or bValue is not string/number
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return direction === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
          return direction === 'asc' ? aValue - bValue : bValue - aValue
        } else {
          return 0 // Default to no sorting if values are not comparable
        }
      })
    }
  }
}
