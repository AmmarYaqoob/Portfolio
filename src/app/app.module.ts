import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav/topnav.component';
import { HeaderComponent } from './header/header/header.component';
import { AsideComponent } from './header/aside/aside.component';
import { AboutComponent } from './body/about/about.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { ServicesComponent } from './body/services/services.component';
import { EducationComponent } from './body/education/education.component';
import { ConnectComponent } from './body/connect/connect.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import { MainComponent } from './body/main/main.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { CaseStudyComponent } from './body/case-study/case-study.component';
import { NgOptimizedImage } from '@angular/common';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { MobileDevelopmentComponent } from './mobile-development/mobile-development.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SeoDevelopmentComponent } from './seo-development/seo-development.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { AnchorComponent } from './shared/components/anchor/anchor.component';
import { WhatYouGetCardComponent } from './shared/components/what-you-get-card/what-you-get-card.component';
import { ScrollRevealDirective } from './shared/directives/scroll-reveal.directive';
import { ScrollRevealGroupDirective } from './shared/directives/scroll-reveal-group.directive';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    TopnavComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    EducationComponent,
    ConnectComponent,
    CardListComponent,
    ContactUsComponent,
    CaseStudyComponent,
    CustomDevelopmentComponent,
    MobileDevelopmentComponent,
    WebDevelopmentComponent,
    SeoDevelopmentComponent,
    ButtonComponent,
    AnchorComponent,
    WhatYouGetCardComponent,
    ScrollRevealDirective,
    ScrollRevealGroupDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
