import { Component, Input, OnInit } from '@angular/core';
import { Card, Skill } from '../../../interfaces/skills-card';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent  {
  @Input() cards!: Card;
 
}
