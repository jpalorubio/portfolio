import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  sending = signal(false);
  sent = signal(false);

  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });

 send() {
    if (this.form.invalid) return;
    this.sending.set(true);

    const ok = this.contactService.send(this.form.value as any);

    setTimeout(() => {
      this.sending.set(false);
      this.sent.set(ok);
      if (ok) this.form.reset();
    }, 500);
  }
}