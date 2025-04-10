import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-pagination',
    imports: [BreadcrumbComponent, NgbPaginationModule],
    templateUrl: './pagination.component.html',
    styles: ``
})
export class PaginationComponent {}
