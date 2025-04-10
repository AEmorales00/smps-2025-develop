import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import {
  NgbProgressbarConfig,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-progress',
    imports: [BreadcrumbComponent, NgbProgressbarModule],
    templateUrl: './progress.component.html',
    styles: ``
})
export class ProgressComponent {
  striped(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000
    config.striped = true
    config.animated = true
    config.type = 'success'
    config.height = '20px'
  }
}
