import { AfterViewInit, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_CATEGORY_LABELS,
  PORTFOLIO_FILTERS,
  PortfolioCategory,
  PortfolioFilter
} from '../../data/portfolio-categories';

interface PortfolioEntry {
  slug: string;
  data: {
    title: string;
    description: string;
    image: string;
    links: { live: string; github: string };
    categories?: PortfolioCategory[];
  };
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {
  filters: PortfolioFilter[] = PORTFOLIO_FILTERS;
  categoryLabels = PORTFOLIO_CATEGORY_LABELS;
  activeFilter: PortfolioFilter['id'] = 'all';

  projects: PortfolioEntry[] = PORTFOLIO_DATA.map((project: PortfolioEntry) => ({
    ...project,
    data: {
      ...project.data,
      categories: PORTFOLIO_CATEGORIES[project.slug] ?? [],
    },
  }));

  ngAfterViewInit(): void {
    register();
  }

  get filteredProjects(): PortfolioEntry[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) =>
      project.data.categories?.includes(this.activeFilter as PortfolioCategory)
    );
  }

  setFilter(filterId: PortfolioFilter['id']): void {
    if (this.activeFilter !== filterId) {
      this.activeFilter = filterId;
    }
  }

  categoryLabel(category: PortfolioCategory): string {
    return this.categoryLabels[category];
  }
}
