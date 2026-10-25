import { Component, input } from '@angular/core';

import { RevealDirective } from '../../core/directives/reveal.directive';
import { PortfolioProfile } from '../../core/models/portfolio.model';

@Component({ selector: 'app-about', imports: [RevealDirective], templateUrl: './about.html', styleUrl: './about.scss' })
export class AboutComponent { readonly profile = input.required<PortfolioProfile>(); }
