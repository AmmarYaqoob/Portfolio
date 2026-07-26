import { Component } from '@angular/core';
import { Card, Skill } from '../../interfaces/skills-card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
        // { name: 'RXJS', progress: 80 },
        { name: 'TypeScript', progress: 90 },
        { name: 'Tailwind CSS', progress: 85 },
        // { name: 'Redux', progress: 80 }
      ]
    },
    {
      title: 'Databases & ORM',
      skills: [
        { name: 'PostgreSQL', progress: 90 },
        { name: 'MongoDB', progress: 85 },
        { name: 'MySQL', progress: 85 },
        { name: 'Sequelize', progress: 85 },
        // { name: 'TypeORM', progress: 80 },
        // { name: 'Mongoose', progress: 85 },
        // { name: 'Prisma', progress: 75 },
        // { name: 'DynamoDB', progress: 70 }
      ]
    },
    {
      title: 'Data Engineering',
      skills: [
        // { name: 'Apache Spark', progress: 70 },
        // { name: 'PySpark', progress: 70 },
        // { name: 'Apache Kafka', progress: 75 },
        { name: 'Elasticsearch', progress: 75 },
        { name: 'ETL Pipelines', progress: 80 },
        { name: 'Data Warehousing', progress: 75 },
        // { name: 'Pandas', progress: 80 },
        { name: 'Numpy', progress: 75 },
        // { name: 'Matplotlib', progress: 70 },
        // { name: 'BeautifulSoup', progress: 75 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', progress: 90 },
        { name: 'Docker', progress: 90 },
        // { name: 'Kubernetes', progress: 75 },
        { name: 'Jenkins', progress: 70 },
        // { name: 'Terraform', progress: 65 },
        { name: 'CI/CD Pipelines', progress: 90 },
        { name: 'GitHub Actions', progress: 90 },
        // { name: 'Netlify', progress: 70 },
        // { name: 'Heroku', progress: 75 }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Ionic Framework', progress: 75 },
        { name: 'Flutter', progress: 75 },
        // { name: 'iOS', progress: 60 },
        // { name: 'Android', progress: 65 }
      ]
    },
    {
      title: 'Version Controls & Tools',
      skills: [
        // { name: 'GitHub', progress: 95 },
        { name: 'Git', progress: 95 },
        { name: 'BitBucket', progress: 80 },
        { name: 'Swagger', progress: 85 },
        { name: 'Postman', progress: 90 },
        // { name: 'Redis', progress: 85 },
        { name: 'NGINX', progress: 75 },
        // { name: 'PM2', progress: 80 },
        { name: 'Jira', progress: 90 },
        { name: 'Confluence', progress: 85 },
        // { name: 'VS Code', progress: 95 },
        // { name: 'Figma', progress: 70 },
        // { name: 'Slack', progress: 90 },
        // { name: 'Notion', progress: 85 }
      ]
    }
  ];
}
