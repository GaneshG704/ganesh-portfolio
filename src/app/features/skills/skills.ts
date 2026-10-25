import { Component, input } from '@angular/core';

import { RevealDirective } from '../../core/directives/reveal.directive';
import { SkillGroup } from '../../core/models/portfolio.model';

@Component({ selector: 'app-skills', imports: [RevealDirective], templateUrl: './skills.html', styleUrl: './skills.scss' })
export class SkillsComponent {
  readonly skillGroups = input.required<readonly SkillGroup[]>();
}
