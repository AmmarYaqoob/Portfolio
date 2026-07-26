import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MainTechnologies, SideTechnologies } from '../../data/technologies';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  @ViewChild('goto') goto!: ElementRef;

  mainTechnologies: any;
  sideTechnologies: any;
  successStory = 0;
  talents = 0;
  clients = 0;
  market = 0;

  ngOnInit(): void {
    this.mainTechnologies = MainTechnologies;
    this.sideTechnologies = SideTechnologies;
  }

  private animated = false;
  private targetNumber = 47;
  @HostListener('window:scroll')
  onScroll() {
    if (this.animated) return;
    const rect = this.goto.nativeElement.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      this.animated = true;
      this.animateCounter();
    }
  }

  animateCounter() {
    const duration = 1500;
    const start = performance.now();
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - start) / duration, 1);
      this.successStory = Math.ceil(progress * this.targetNumber);
      this.talents = Math.ceil(progress * this.talents);
      this.clients = Math.ceil(progress * this.clients);
      this.market = Math.ceil(progress * this.market);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}
