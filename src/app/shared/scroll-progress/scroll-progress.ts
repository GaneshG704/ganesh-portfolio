import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.html',
  styleUrl: './scroll-progress.scss',
})
export class ScrollProgressComponent {
  protected readonly progress = signal(0);

  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => this.trackScroll());
  }

  private trackScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let frameId: number | undefined;
    const updateProgress = () => {
      frameId = undefined;
      const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maximumScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maximumScroll)) : 0;
      this.progress.set(nextProgress);
    };
    const scheduleUpdate = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    scheduleUpdate();

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    });
  }
}
