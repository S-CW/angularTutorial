import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
]);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  submitForm() {
    console.log(this.contactForm.valid);
  }
}
