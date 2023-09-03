import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {

  }

  sendEmail = (name: string, message: string, email: string) => {
    emailjs.init('OwzALebwNBF92Fj7t');
    emailjs.send("service_wgfb0qe","template_n1ww16q",{
      from_name: name,
      message: message,
      from_email: email,
    });
  }
}
