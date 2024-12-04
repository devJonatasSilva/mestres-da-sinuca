import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-games-page',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './create-games-page.component.html',
  styleUrls: ['./create-games-page.component.css'] // Corrigir o nome de `styleUrl` para `styleUrls`
})
export class CreateGamesPageComponent {
  gameOptions = [
    { title: 'Campeonato Mensal', description: 'Formato de pontos corridos', route: '/create-monthly-championship' },
    { title: 'Jogo Amistoso', description: 'Jogo rápido para estatísticas pessoais', route: '/create-friendly-match' },
    { title: 'Torneio de Eliminação Direta', description: 'Formato mata-mata', route: '/create-knockout-tournament' },
    { title: 'Rodadas de Duplas', description: 'Duplas fixas ou sorteadas', route: '/create-double-rounds' },
    { title: 'Desafios Especiais', description: 'Regras diferenciadas', route: '/create-special-challenges' },
    { title: 'Liga Relâmpago', description: 'Mini-campeonato rápido', route: '/create-blitz-league' },
    { title: 'Todos Contra Todos', description: 'Cada jogador enfrenta todos os outros', route: '/create-free-for-all' },
    { title: 'Torneio de Revezamento', description: 'Rodadas alternadas por dupla', route: '/create-relay-tournament' },
    { title: 'Jogo das Estrelas', description: 'Competição entre os melhores jogadores', route: '/create-all-stars' },
  ];
}
