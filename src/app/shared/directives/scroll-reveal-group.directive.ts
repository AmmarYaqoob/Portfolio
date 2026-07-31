import {
  AfterViewChecked,
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
  resetScrollReveal,
  ScrollRevealVariant,
  showScrollReveal
} from './scroll-reveal.utils';

@Directive({
  selector: '[appScrollRevealGroup]'
})
export class ScrollRevealGroupDirective implements AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() revealChildSelector = ':scope > *';
  @Input() revealStagger = 80;
  @Input() revealVariant: ScrollRevealVariant = 'up';
  @Input() revealKey: string | number | boolean = 'initial';

  private observer?: IntersectionObserver;
  private observedElements: HTMLElement[] = [];
  private lastRevealKey: string | number | boolean = 'initial';
  private initialized = false;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.setup();
    this.initialized = true;
  }

  ngAfterViewChecked(): void {
    if (!this.initialized || this.revealKey === this.lastRevealKey) {
      return;
    }

    this.lastRevealKey = this.revealKey;
    this.setup();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setup(): void {
    this.observer?.disconnect();
    this.observedElements = [];

    const host = this.elementRef.nativeElement;
    const children = Array.from(
      host.querySelectorAll<HTMLElement>(this.revealChildSelector)
    );

    if (!children.length) {
      return;
    }

    if (prefersReducedMotion()) {
      children.forEach((child) => showScrollReveal(child));
      return;
    }

    this.observer = createScrollRevealObserver((target) => {
      showScrollReveal(target as HTMLElement);
      this.observer?.unobserve(target);
    });

    children.forEach((child, index) => {
      resetScrollReveal(child);
      child.classList.remove('scroll-reveal', 'scroll-reveal--up', 'scroll-reveal--left', 'scroll-reveal--right', 'scroll-reveal--scale', 'scroll-reveal--fade');
      child.style.transitionDelay = '';
      applyScrollRevealClasses(child, this.revealVariant, index * this.revealStagger);
      this.observer?.observe(child);
      this.observedElements.push(child);
    });
  }
}
