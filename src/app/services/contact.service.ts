import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {

  async send(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<boolean> {

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) return false;

      const json = await res.json();
      return json.ok;

    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
