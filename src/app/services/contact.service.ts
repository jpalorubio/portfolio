import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private ws = new WebSocket('ws://localhost:8080');

  send(data: { name: string; email: string; subject: string; message: string }) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
      return true;
    }
    return false;
  }
}