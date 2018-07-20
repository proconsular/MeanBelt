import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetTableComponent } from './pet-table/pet-table.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const routes: Routes = [
  {
    path: 'pets',
    component: PetTableComponent
  },
  {
    path: 'pets/new',
    component: PetCreateComponent
  },
  {
    path: 'pets/:id/edit',
    component: PetEditComponent
  },
  {
    path: 'pets/:id',
    component: PetDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pets'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
