import {
  Component,
  inject,
  Renderer2,
  type OnDestroy,
  type OnInit,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-auth-layout',
  imports: [RouterModule,NgbCarouselModule],
  template: `
    <div class="account-page">
      <div class="container-fluid p-0">
        <div class="row align-items-center g-0 px-3 py-3 vh-100">
          <div class="col-12">
            <router-outlet />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class AuthLayoutComponent  {
}
