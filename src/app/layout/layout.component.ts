import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { RouterModule } from '@angular/router'
import feather from 'feather-icons'
import { credits, currentYear } from '@common/constants'

@Component({
    selector: 'app-layout',
    imports: [TopbarComponent, SidebarComponent, RouterModule],
    templateUrl: './layout.component.html',
    styles: ``
})
export class LayoutComponent {
  year = currentYear
  name = credits.name
  ngAfterViewInit() {
    feather.replace()
  }
}
