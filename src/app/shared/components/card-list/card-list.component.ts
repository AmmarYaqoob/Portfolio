import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Card } from '../../../interfaces/skills-card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements AfterViewInit, OnDestroy {
  @Input() cards!: Card;
  @Input() cardIndex = 0;

  @ViewChild('skillCard') skillCard!: ElementRef<HTMLElement>;

  animated = false;

  private observer?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.animated = true;
      this.cdr.markForCheck();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.cdr.markForCheck();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -6% 0px' }
    );

    if (this.skillCard?.nativeElement) {
      this.observer.observe(this.skillCard.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  barWidth(progress: number): number {
    return this.animated ? progress : 0;
  }

  barDelay(skillIndex: number): number {
    return this.cardIndex * 120 + skillIndex * 90;
  }
}
