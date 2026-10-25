import { Component, input } from '@angular/core';
import { PortfolioProfile } from '../../core/models/portfolio.model';

@Component({ selector: 'app-hero', templateUrl: './hero.html', styleUrl: './hero.scss' })
export class HeroComponent { readonly profile = input.required<PortfolioProfile>(); }
