import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './body/main/main.component';
import { AboutComponent } from './body/about/about.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { CaseStudyComponent } from './body/case-study/case-study.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SeoDevelopmentComponent } from './seo-development/seo-development.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { MobileDevelopmentComponent } from './mobile-development/mobile-development.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'portfolio/:slug',
    component: CaseStudyComponent,
  },
  {
    path: 'web-development',
    component: WebDevelopmentComponent,
  },
  {
    path: 'seo',
    component: SeoDevelopmentComponent,
  },
  {
    path: 'custom-development',
    component: CustomDevelopmentComponent,
  },
  {
    path: 'mobile-application-development',
    component: MobileDevelopmentComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
