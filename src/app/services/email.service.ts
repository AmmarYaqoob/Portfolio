import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environment/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(name: string, emailAdress: string, phonenumber: string, description: string, currentTime: string = new Date().toString()) {
    emailjs.send(environment.SERVICE_ID, environment.TEMPLATE_ID, {
      name: name,
      emailaddress: emailAdress,
      phonenumber: phonenumber,
      description: description,
      time: currentTime,
      email: environment.EMAIL,
    }, environment.PUBLIC_KEY);
  }
}
