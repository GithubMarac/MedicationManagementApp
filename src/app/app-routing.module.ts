import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { MedicationFormComponent } from './medication-form/medication-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/medications', pathMatch: 'full' },
  { path: 'medications', component: MedicationListComponent },
  { path: 'add-medication', component: MedicationFormComponent },
  { path: 'edit-medication/:id', component: MedicationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }