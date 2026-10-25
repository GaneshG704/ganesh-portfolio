import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, afterNextRender, inject, input, signal } from '@angular/core';

import { PortfolioProfile } from '../../core/models/portfolio.model';

@Component({ selector: 'app-navbar', templateUrl: './navbar.html', styleUrl: './navbar.scss' })
export class NavbarComponent {
  readonly profile = input.required<PortfolioProfile>();
  protected readonly activeSection = signal('top');
  protected readonly navItems = [
    { id: 'about', label: 'About' },
    { id: 'impact', label: 'Impact' },
    { id: 'experience', label: 'Experience' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => this.trackActiveSection());
  }

  protected setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }

  private trackActiveSection(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const sectionIds = ['top', ...this.navItems.map((item) => item.id)];
    const sections = sectionIds
      .map((id) => this.document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const setFromHash = () => {
      const hashId = window.location.hash.slice(1);
      if (sectionIds.includes(hashId)) {
        this.activeSection.set(hashId);
      }
    };

    setFromHash();
    window.addEventListener('hashchange', setFromHash);

    const supportsIntersectionObserver = typeof globalThis.IntersectionObserver === 'function';
    if (!supportsIntersectionObserver) {
      let frameId: number | undefined;
      const setFromScrollPosition = () => {
        frameId = undefined;
        const activationLine = window.innerHeight * 0.3;
        const activeId = sections.reduce((currentId, section) => (
          section.getBoundingClientRect().top <= activationLine ? section.id : currentId
        ), 'top');
        this.activeSection.set(activeId);
      };
      const scheduleScrollUpdate = () => {
        if (frameId === undefined) {
          frameId = window.requestAnimationFrame(setFromScrollPosition);
        }
      };

      window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
      window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
      scheduleScrollUpdate();
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('hashchange', setFromHash);
        window.removeEventListener('scroll', scheduleScrollUpdate);
        window.removeEventListener('resize', scheduleScrollUpdate);
        if (frameId !== undefined) {
          window.cancelAnimationFrame(frameId);
        }
      });
      return;
    }

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        }

        const activeId = [...visibleSections.entries()]
          .sort(([, ratioA], [, ratioB]) => ratioB - ratioA)[0]?.[0];
        if (activeId) {
          this.activeSection.set(activeId);
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      window.removeEventListener('hashchange', setFromHash);
    });
  }
}
