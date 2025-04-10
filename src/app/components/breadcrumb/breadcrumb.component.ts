import { Component, Input } from '@angular/core'

@Component({
    selector: 'breadcrumb',
    imports: [],
    templateUrl: './breadcrumb.component.html',
    styles: ``
})
export class BreadcrumbComponent {
  @Input() title: string = ''
  @Input() subtitle: string = ''
}
