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
      console.log(params['slug']);
      this.project = PORTFOLIO_DATA[params['slug']].data;
      console.log(this.project)
    });
  }
}
