import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { MedicamentosService } from './medicamentos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    MedicamentosModule
  ],
  providers: [
    MedicamentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
