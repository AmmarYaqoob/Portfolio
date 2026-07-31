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
  yearsExperience = 0;
  technologies = 0;
  projects = 0;

  private animated = false;
  private readonly targets = {
    successStory: 10,
    yearsExperience: 4,
    technologies: 20,
    projects: 10,
  };

  ngOnInit(): void {
    this.mainTechnologies = MainTechnologies;
    this.sideTechnologies = SideTechnologies;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.animated || !this.goto) return;
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
      this.successStory = Math.ceil(progress * this.targets.successStory);
      this.yearsExperience = Math.ceil(progress * this.targets.yearsExperience);
      this.technologies = Math.ceil(progress * this.targets.technologies);
      this.projects = Math.ceil(progress * this.targets.projects);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}
