import { Component, inject, signal, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContactService } from '../../services/contact.service';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';

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
    TranslateModule,
    SocialLinksComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private el = inject(ElementRef);

  sending = signal(false);
  sent = signal(false);

  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });

  ngAfterViewInit() {
    const el = this.el.nativeElement;

    // Hero entra desde arriba
    gsap.from(el.querySelector('.contact-hero'), {
      opacity: 0,
      y: -30,
      duration: 0.7,
      ease: 'power2.out',
      clearProps: 'all'
    });

    // Links de contacto entran desde la izquierda
    gsap.from(el.querySelector('.contact-info'), {
      opacity: 0,
      x: -50,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.2,
      clearProps: 'all'
    });

    // Formulario entra desde la derecha
    gsap.from(el.querySelector('.contact-form-card'), {
      opacity: 0,
      x: 50,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.2,
      clearProps: 'all'
    });
  }

 async send() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.sending.set(true);

  const ok = await this.contactService.send(this.form.value as any);

  this.sending.set(false);
  this.sent.set(ok);

  if (ok) {
    this.form.reset();
  }
}
}

