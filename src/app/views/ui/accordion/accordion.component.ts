import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
@Component({
    selector: 'app-accordion',
    imports: [BreadcrumbComponent, NgbAccordionModule],
    templateUrl: './accordion.component.html',
    styles: ``
})
export class AccordionComponent {}
