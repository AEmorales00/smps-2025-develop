import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TitleService } from './services/title.service'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
 
  })
export class AppComponent {
  title = 'hando-angular'
  private titleService = inject(TitleService)

  ngOnInit(): void {
    this.titleService.init()
  }
}
