import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'resumeangular';
  splashVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.splashVisible = false;
    }, 2400);
  }
}
