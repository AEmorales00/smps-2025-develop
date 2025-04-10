import { Component, inject, Renderer2 } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-error-layout',
    imports: [RouterModule],
    templateUrl: './error-layout.component.html',
    styles: ``
})
export class ErrorLayoutComponent {
  private renderer = inject(Renderer2)

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'maintenance-bg-image')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'maintenance-bg-image')
  }
}
