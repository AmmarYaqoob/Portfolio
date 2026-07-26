import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: any = PORTFOLIO_DATA;

  ngAfterViewInit(): void {
    register();
  }
}
