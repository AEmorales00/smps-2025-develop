import { Component } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-collapse',
    imports: [BreadcrumbComponent, NgbCollapseModule],
    templateUrl: './collapse.component.html',
    styles: ``
})
export class CollapseComponent {
  isCollapsed = true
  isHorizontal = true
  isFirstToggle = true
  isSecondToggle = true
}
