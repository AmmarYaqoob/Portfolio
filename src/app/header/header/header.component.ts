import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggle = true;

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  text_black = false;
  blackRoutes = ['portfolio', 'contact']

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        for (let i: any = 0; i < this.blackRoutes.length; i++) {
          this.text_black = this.router.url.startsWith('/' + this.blackRoutes[i])
          if (this.text_black) break;
        }
      });
  }
}
