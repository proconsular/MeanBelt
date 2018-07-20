import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PetService } from './pet.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetTableComponent } from './pet-table/pet-table.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PetTableComponent,
    PetCreateComponent,
    PetDetailComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
