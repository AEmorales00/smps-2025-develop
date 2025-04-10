import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { alerts } from './data'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-alerts',
    imports: [BreadcrumbComponent, NgbAlertModule],
    templateUrl: './alerts.component.html',
    styles: ``
})
export class AlertsComponent {
  alerts = alerts
}
