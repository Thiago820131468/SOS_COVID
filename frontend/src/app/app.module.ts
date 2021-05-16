import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/template/inicio/inicio.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { CadastroClinicaComponent } from './components/template/cadastro-clinica/cadastro-clinica.component';
import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroComponent,
    CadastroClinicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [ ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
