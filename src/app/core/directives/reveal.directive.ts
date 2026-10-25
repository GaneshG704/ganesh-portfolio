import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, DestroyRef, ElementRef, PLATFORM_ID, Renderer2, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  readonly appRevealDelay = input(0);

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);

  constructor() {
    afterNextRender(() => this.observe());
  }

  private observe(): void {
    if (!isPlatformBrowser(this.platformId) || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return;
    }

    const target = this.element.nativeElement;
    this.renderer.setStyle(target, '--reveal-delay', `${this.appRevealDelay()}ms`);
    this.renderer.addClass(target, 'reveal-target');
    this.renderer.addClass(this.document.documentElement, 'motion-ready');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(target, 'is-revealed');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    );

    observer.observe(target);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
