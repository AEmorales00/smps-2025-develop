import { Component, inject, TemplateRef } from '@angular/core'
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component'
import {
  NgbModal,
  NgbModalModule,
  NgbModalOptions,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-modals',
    imports: [BreadcrumbComponent, NgbModalModule, NgbTooltipModule],
    templateUrl: './modals.component.html',
    styles: ``
})
export class ModalsComponent {
  private modalService = inject(NgbModal)

  name: string = ''

  open(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

  openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
    this.modalService.open(content, options)
  }

  openvaryingModal(content: TemplateRef<HTMLElement>, name: string) {
    this.modalService.open(content)
    this.name = name
  }
}
