import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent implements OnInit {
  project: any = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const entry = PORTFOLIO_DATA.find((p: { slug: string }) => p.slug === slug)
        ?? PORTFOLIO_DATA[Number(slug)];
      this.project = entry?.data ?? {};
    });
  }

  asText(value: string | string[] | undefined): string {
    if (!value) {
      return '';
    }
    return Array.isArray(value) ? value.join(' ') : value;
  }
}
