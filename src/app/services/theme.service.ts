import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private theme: string = 'light';
  private config = { theme: 'light' };

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    this.theme = storedTheme || this.config.theme;
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', this.theme);
  }

  changeTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.config.theme = this.theme;
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  getTheme(): string {
    return this.theme;
  }
}
