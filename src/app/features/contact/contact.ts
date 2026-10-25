import { Component, input } from '@angular/core';

import { ContactDetails, EnquiryFormConfig, PortfolioProfile } from '../../core/models/portfolio.model';

@Component({ selector: 'app-contact', templateUrl: './contact.html', styleUrl: './contact.scss' })
export class ContactComponent {
  readonly profile = input.required<PortfolioProfile>();
  readonly contact = input.required<ContactDetails>();
  readonly enquiryForm = input.required<EnquiryFormConfig>();

  protected googleFormsUrl(): string | undefined {
    const config = this.enquiryForm();
    if (config.enabled && config.integration.provider === 'google-forms' && config.privacyNotice) {
      return config.integration.formUrl;
    }

    return undefined;
  }
}
