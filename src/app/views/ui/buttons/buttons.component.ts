import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-buttons',
    imports: [BreadcrumbComponent, NgbDropdownModule],
    templateUrl: './buttons.component.html',
    styles: ``
})
export class ButtonsComponent {}
