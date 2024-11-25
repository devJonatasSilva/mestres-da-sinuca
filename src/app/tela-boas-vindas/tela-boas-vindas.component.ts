import { BotaoComponent } from './../botao/botao.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-boas-vindas',
  standalone: true,
  imports: [
    BotaoComponent
  ],
  templateUrl: './tela-boas-vindas.component.html',
  styleUrl: './tela-boas-vindas.component.css'
})
export class TelaBoasVindasComponent {

}
