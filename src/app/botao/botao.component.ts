import { Component, Input } from '@angular/core';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input() route!: string;
}
