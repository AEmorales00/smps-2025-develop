import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import {
  NgbDropdownModule,
  NgbScrollSpyModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-scrollspy',
    imports: [BreadcrumbComponent, NgbScrollSpyModule, NgbDropdownModule],
    templateUrl: './scrollspy.component.html',
    styles: ``
})
export class ScrollspyComponent {}
