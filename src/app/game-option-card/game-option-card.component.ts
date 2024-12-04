import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-option-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-option-card.component.html',
  styleUrl: './game-option-card.component.css'
})
export class GameOptionCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() route!: string;


  constructor(private router: Router) {}

  navigateToRoute() {
    this.router.navigate([this.route]);
  }

}





