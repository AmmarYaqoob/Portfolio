import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Card, Skill } from '../../interfaces/skills-card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('timelineContainer') timelineContainer!: ElementRef<HTMLElement>;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef<HTMLElement>>;

  lineProgress = 0;
  activeDots = [false, false, false];

  private itemObserver?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  data: Card[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: '.Net', progress: 95 },
        { name: 'Golang', progress: 60 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'NodeJS', progress: 95 },
        { name: 'ExpressJS', progress: 90 },
        { name: 'NestJS', progress: 85 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', progress: 85 },
        { name: 'TypeScript', progress: 90 },
        { name: 'Tailwind CSS', progress: 85 },
      ]
    },
    {
      title: 'Databases & ORM',
      skills: [
        { name: 'PostgreSQL', progress: 90 },
        { name: 'MongoDB', progress: 85 },
        { name: 'MySQL', progress: 85 },
        { name: 'Sequelize', progress: 85 },
      ]
    },
    {
      title: 'Data Engineering',
      skills: [
        { name: 'Elasticsearch', progress: 75 },
        { name: 'ETL Pipelines', progress: 80 },
        { name: 'Data Warehousing', progress: 75 },
        { name: 'Numpy', progress: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', progress: 90 },
        { name: 'Docker', progress: 90 },
        { name: 'Jenkins', progress: 70 },
        { name: 'CI/CD Pipelines', progress: 90 },
        { name: 'GitHub Actions', progress: 90 },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Ionic Framework', progress: 75 },
        { name: 'Flutter', progress: 75 },
      ]
    },
    {
      title: 'Version Controls & Tools',
      skills: [
        { name: 'Git', progress: 95 },
        { name: 'BitBucket', progress: 80 },
        { name: 'Swagger', progress: 85 },
        { name: 'Postman', progress: 90 },
        { name: 'NGINX', progress: 75 },
        { name: 'Jira', progress: 90 },
        { name: 'Confluence', progress: 85 },
      ]
    }
  ];

  ngAfterViewInit(): void {
    this.itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset['index']);
          if (Number.isNaN(index)) {
            return;
          }
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item--visible');
            this.activeDots = this.activeDots.map((active, i) => i === index ? true : active);
            this.cdr.markForCheck();
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    );

    this.timelineItems.forEach((item, index) => {
      item.nativeElement.dataset['index'] = String(index);
      this.itemObserver?.observe(item.nativeElement);
    });

    this.updateLineProgress();
  }

  ngOnDestroy(): void {
    this.itemObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateLineProgress();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateLineProgress();
  }

  private updateLineProgress(): void {
    const container = this.timelineContainer?.nativeElement;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const startOffset = viewportHeight * 0.72;
    const scrollableDistance = rect.height + startOffset - viewportHeight * 0.28;
    const scrolled = startOffset - rect.top;
    const progress = scrollableDistance > 0 ? (scrolled / scrollableDistance) * 100 : 0;

    this.lineProgress = Math.min(100, Math.max(0, progress));
  }
}
