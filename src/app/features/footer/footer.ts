import { Component, input } from '@angular/core';

import { ContactDetails, PortfolioProfile } from '../../core/models/portfolio.model';

@Component({ selector: 'app-footer', templateUrl: './footer.html', styleUrl: './footer.scss' })
export class FooterComponent {
  readonly profile = input.required<PortfolioProfile>();
  readonly contact = input.required<ContactDetails>();
  protected readonly currentYear = new Date().getFullYear();
}
