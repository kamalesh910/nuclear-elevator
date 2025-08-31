import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ContactInquiry } from '../../models/contact-inquiry.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  message = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const inquiry: ContactInquiry = this.contactForm.value;
      
      this.contactService.submitContact(inquiry).subscribe({
        next: (response) => {
          this.message = 'Thank you! Your inquiry has been sent successfully.';
          this.messageType = 'success';
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.message = 'Sorry, there was an error sending your inquiry. Please try again.';
          this.messageType = 'error';
          this.isSubmitting = false;
        }
      });
    }
  }
}