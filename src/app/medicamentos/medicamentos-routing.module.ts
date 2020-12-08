import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicamentosFormComponent } from './medicamentos-form/medicamentos-form.component'
import { MedicamentosListaComponent } from './medicamentos-lista/medicamentos-lista.component';

const routes: Routes = [
  { path: 'medicamentos-form', component: MedicamentosFormComponent},
  { path: 'medicamentos-form/:id', component: MedicamentosFormComponent},
  { path: 'medicamentos-lista', component: MedicamentosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
