import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [
    BotaoComponent
  ],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {

}
