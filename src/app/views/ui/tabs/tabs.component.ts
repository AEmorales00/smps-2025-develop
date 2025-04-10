import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-tabs',
    imports: [BreadcrumbComponent, NgbNavModule],
    templateUrl: './tabs.component.html',
    styles: ``
})
export class TabsComponent {}
