import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Definir as propriedades do jogador
  @Input() player!: Player; // Receber as informações do jogador
  @Input() isFirst = false; // Definir se o jogador é o 1º lugar
  @Input() isSecond = false; // Definir se o jogador é o 2º lugar
  @Input() isThird = false; // Definir se o jogador é o 3º lugar
  @Input() isMVP = false; // Definir se o jogador é MVP

}

interface Player {
  name: string;
  avatarUrl: string;
  victories: number;
  losses: number;
}

