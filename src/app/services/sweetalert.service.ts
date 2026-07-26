import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  fireBasic(title: string, message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') {
    Swal.fire({
      title: title,
      text: message,
      icon: icon
    });
  }
}
