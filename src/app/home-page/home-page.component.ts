import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  players = [
    {
      name: 'Jogador 1',
      avatarUrl: 'assets/avatar1.jpg',
      victories: 10,
      losses: 2,
      isMVP: true
    },
    {
      name: 'Jogador 2',
      avatarUrl: 'assets/avatar2.jpg',
      victories: 8,
      losses: 4,
      isMVP: false
    },
    {
      name: 'Jogador 3',
      avatarUrl: 'assets/avatar3.jpg',
      victories: 7,
      losses: 5,
      isMVP: false
    }
  ];

}
