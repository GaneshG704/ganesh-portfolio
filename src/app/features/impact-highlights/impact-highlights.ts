import { Component, input } from '@angular/core';

import { RevealDirective } from '../../core/directives/reveal.directive';
import { ImpactHighlight } from '../../core/models/portfolio.model';

@Component({ selector: 'app-impact-highlights', imports: [RevealDirective], templateUrl: './impact-highlights.html', styleUrl: './impact-highlights.scss' })
export class ImpactHighlightsComponent {
  readonly highlights = input.required<readonly ImpactHighlight[]>();
}
