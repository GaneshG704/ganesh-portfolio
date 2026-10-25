import { Component } from '@angular/core';

import { portfolioContent } from './core/data/portfolio.data';
import { AboutComponent } from './features/about/about';
import { HeroComponent } from './features/hero/hero';
import { ImpactHighlightsComponent } from './features/impact-highlights/impact-highlights';
import { InitiativesComponent } from './features/initiatives/initiatives';
import { NavbarComponent } from './features/navbar/navbar';
import { ExperienceComponent } from './features/experience/experience';
import { SkillsComponent } from './features/skills/skills';
import { ContactComponent } from './features/contact/contact';
import { FooterComponent } from './features/footer/footer';
import { ScrollProgressComponent } from './shared/scroll-progress/scroll-progress';

@Component({
  selector: 'app-root',
  imports: [ScrollProgressComponent, NavbarComponent, HeroComponent, AboutComponent, ImpactHighlightsComponent, ExperienceComponent, InitiativesComponent, SkillsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly portfolio = portfolioContent;
}
