import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-popover',
    imports: [BreadcrumbComponent, NgbPopoverModule],
    templateUrl: './popover.component.html',
    styles: ``
})
export class PopoverComponent {}
