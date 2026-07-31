export type ScrollRevealVariant = 'up' | 'left' | 'right' | 'scale' | 'fade';

export const SCROLL_REVEAL_VISIBLE_CLASS = 'scroll-reveal--visible';

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function applyScrollRevealClasses(
  element: HTMLElement,
  variant: ScrollRevealVariant,
  delayMs = 0
): void {
  element.classList.add('scroll-reveal', `scroll-reveal--${variant}`);

  if (delayMs > 0) {
    element.style.transitionDelay = `${delayMs}ms`;
  }
}

export function resetScrollReveal(element: HTMLElement): void {
  element.classList.remove(SCROLL_REVEAL_VISIBLE_CLASS);
}

export function showScrollReveal(element: HTMLElement): void {
  element.classList.add(SCROLL_REVEAL_VISIBLE_CLASS);
}

export function createScrollRevealObserver(
  onIntersect: (target: Element) => void,
  threshold = 0.2
): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry.target);
        }
      });
    },
    { threshold, rootMargin: '0px 0px -6% 0px' }
  );
}
