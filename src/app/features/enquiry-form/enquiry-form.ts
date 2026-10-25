import { Component, input, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';

import { EnquiryFormConfig } from '../../core/models/portfolio.model';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-enquiry-form',
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry-form.html',
  styleUrl: './enquiry-form.scss',
})
export class EnquiryFormComponent {
  readonly config = input.required<EnquiryFormConfig>();

  protected readonly submissionState = signal<SubmissionState>('idle');
  protected readonly submitted = signal(false);
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email, Validators.maxLength(254)] }),
    enquiryType: new FormControl('', { nonNullable: true, validators: Validators.required }),
    company: new FormControl('', { nonNullable: true, validators: Validators.maxLength(160) }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(3000)] }),
    _gotcha: new FormControl('', { nonNullable: true }),
  });

  protected showError(control: FormControl<string>): boolean {
    return control.invalid && (control.touched || this.submitted());
  }

  protected submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.controls._gotcha.value) {
      this.form.reset();
      this.submitted.set(false);
      return;
    }

    // Provider submission is intentionally deferred until a client-owned endpoint is configured.
    this.submissionState.set('error');
  }
}
