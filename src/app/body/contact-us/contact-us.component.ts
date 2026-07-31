import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SweetalertService } from '../../services/sweetalert.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  isLoading = false;

  constructor(private fb: FormBuilder, private emailService: EmailService, private sweetalertService: SweetalertService) {
  }
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required],
    callMe: [false],
    urgent: [false]
  });

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    console.log(this.contactForm.value);
    let control = this.contactForm.controls;

    this.emailService.sendEmail(control?.name?.value || '', control?.email?.value || '', control?.phone?.value || '', control?.message?.value || '');
    this.sweetalertService.fireBasic("Message Sent", "Your message has been sent successfully. I will get back to you soon.", "success");
    this.contactForm.reset();
    this.isLoading = false;
  }

  get f() {
    return this.contactForm.controls;
  }


}
