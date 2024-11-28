import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mestres-da-sinuca';

  isOcultaNavbarNasRotas = false;
  private rotasSemNavbar  = ['/', '/login', '/form-cadastro'];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isOcultaNavbarNasRotas = this.rotasSemNavbar.includes(this.router.url);
    });
  }
}
