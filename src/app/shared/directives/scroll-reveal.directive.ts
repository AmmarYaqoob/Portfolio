import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy
} from '@angular/core';
import {
  applyScrollRevealClasses,
  createScrollRevealObserver,
  prefersReducedMotion,
  ScrollRevealVariant,
  showScrollReveal
} from './scroll-reveal.utils';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealVariant: ScrollRevealVariant = 'up';
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    applyScrollRevealClasses(element, this.revealVariant, this.revealDelay);

    if (prefersReducedMotion()) {
      showScrollReveal(element);
      return;
    }

    this.observer = createScrollRevealObserver((target) => {
      showScrollReveal(target as HTMLElement);
      if (this.revealOnce) {
        this.observer?.unobserve(target);
      }
    });

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
