import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/template/inicio/inicio.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { CadastroClinicaComponent } from './components/template/cadastro-clinica/cadastro-clinica.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroComponent,
    CadastroClinicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
