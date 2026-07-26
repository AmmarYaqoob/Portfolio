import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-what-you-get-card',
  templateUrl: './what-you-get-card.component.html',
  styleUrl: './what-you-get-card.component.css',
  standalone: false
})
export class WhatYouGetCardComponent {
  @Input() title: any;
  @Input() info: any;
  @Input() icon: any;

}
