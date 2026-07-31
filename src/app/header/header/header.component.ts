import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  text_black = false;
  blackRoutes = ['portfolio', 'contact'];
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateHeaderTheme(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        this.updateHeaderTheme(url);
        this.closeMenu();
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  closeMenu(): void {
    const menuCheckbox = document.getElementById('top-menu-checkbox') as HTMLInputElement | null;
    const servicesCheckbox = document.getElementById('header-checkbox-services') as HTMLInputElement | null;

    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }

    if (servicesCheckbox) {
      servicesCheckbox.checked = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const menuCheckbox = document.getElementById('top-menu-checkbox') as HTMLInputElement | null;

    if (!menuCheckbox?.checked) {
      return;
    }

    const target = event.target as HTMLElement;

    if (target.closest('.header-burger, label[for="top-menu-checkbox"]')) {
      return;
    }

    if (target.closest('.header-item__link, .header-item-submenu-elem-link, .header-contact .button')) {
      return;
    }

    this.closeMenu();
  }

  private updateHeaderTheme(url: string): void {
    this.text_black = this.blackRoutes.some(route => url.startsWith(`/${route}`));
  }
}
