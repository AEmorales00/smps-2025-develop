import { ThemeService } from '@/app/services/theme.service'
import { CommonModule, DOCUMENT } from '@angular/common'
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  RendererFactory2,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import * as feather from 'feather-icons'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-topbar',
  imports: [NgbDropdownModule, SimplebarAngularModule, RouterLink, CommonModule,],
  templateUrl: './topbar.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopbarComponent {
  isSidebarVisible = true
  isFullscreen: boolean = false
  // private theme: string = 'light';
  private config = { theme: 'light' };
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private cdr: ChangeDetectorRef,
    private themeService: ThemeService,
    rendererFactory: RendererFactory2
  ) { this.renderer = rendererFactory.createRenderer(null, null); }

  elem: any

  ngOnInit() {
    this.elem = document.documentElement
    this.updateOnWindowResize()
    this.themeService.initTheme();
    feather.replace();
  }

 
  get theme(): string {
    return this.themeService.getTheme();
  }

  changeTheme(): void {
    this.themeService.changeTheme();
    setTimeout(() => {
      feather.replace();
      const themeIcon = document.getElementById('theme-icon');
      if (themeIcon) {
        themeIcon.setAttribute('data-feather', this.theme === 'light' ? 'sun' : 'moon');
        feather.replace();
      }
    }, 100);
  }

  onToggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible
    this.updateBodyAttribute()
  }

  updateBodyAttribute() {
    const body = this.el.nativeElement.ownerDocument.body
    if (this.isSidebarVisible) {
      this.renderer.setAttribute(body, 'data-sidebar', 'default')
    } else {
      this.renderer.setAttribute(body, 'data-sidebar', 'hidden')
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateOnWindowResize()
  }

  updateOnWindowResize() {
    const body = document.body
    if (window.innerWidth < 1040) {
      this.renderer.setAttribute(body, 'data-sidebar', 'hidden')
    } else {
      this.renderer.setAttribute(body, 'data-sidebar', 'default')
    }
  }
  openFullscreen() {
    const elem: any = document.documentElement;
    console.log(this.isFullscreen);
    if (!this.isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      this.isFullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.isFullscreen = false;
    }
  
    setTimeout(() => {
      feather.replace();
      const fullscreenIcon = document.getElementById('fullscreen-icon');
      if (fullscreenIcon) {
        fullscreenIcon.setAttribute('data-feather', this.isFullscreen ? 'minimize' : 'maximize');
        feather.replace();
      }
    });
  }
}
