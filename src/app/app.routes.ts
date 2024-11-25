import { Routes } from '@angular/router';
import { TelaloginComponent } from './telalogin/telalogin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TelaBoasVindasComponent } from './tela-boas-vindas/tela-boas-vindas.component';


export const routes: Routes = [
  { path: '', component: TelaBoasVindasComponent },
  { path: 'login', component: TelaloginComponent }, // Rota para o TelaLogin
  { path: 'home', component: HomePageComponent },
  // { path: 'login', component: TelaloginComponent },
];
