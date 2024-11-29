import type { Routes } from '@angular/router';
import { TelaloginComponent } from './telalogin/telalogin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TelaBoasVindasComponent } from './tela-boas-vindas/tela-boas-vindas.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { RankingMensalComponent } from './ranking-mensal/ranking-mensal.component';


export const routes: Routes = [
  { path: '', component: TelaBoasVindasComponent },
  { path: 'login', component: TelaloginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'form-cadastro', component: FormCadastroComponent},
  { path: 'ranking', component: RankingMensalComponent },
];
