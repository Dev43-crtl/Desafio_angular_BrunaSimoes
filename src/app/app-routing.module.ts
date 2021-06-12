import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitaisComponent } from './capitais/capitais.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  { path: '', component: PainelComponent },
  { path: 'capitais', component: CapitaisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
