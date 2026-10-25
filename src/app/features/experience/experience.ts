import { Component, input } from '@angular/core';

import { RevealDirective } from '../../core/directives/reveal.directive';
import { ProfessionalExperience } from '../../core/models/portfolio.model';

@Component({ selector: 'app-experience', imports: [RevealDirective], templateUrl: './experience.html', styleUrl: './experience.scss' })
export class ExperienceComponent {
  readonly experience = input.required<ProfessionalExperience>();
}
