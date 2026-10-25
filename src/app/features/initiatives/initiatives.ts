import { Component, input } from '@angular/core';

import { RevealDirective } from '../../core/directives/reveal.directive';
import { EnterpriseInitiative } from '../../core/models/portfolio.model';

@Component({ selector: 'app-initiatives', imports: [RevealDirective], templateUrl: './initiatives.html', styleUrl: './initiatives.scss' })
export class InitiativesComponent {
  readonly initiatives = input.required<readonly EnterpriseInitiative[]>();
}
