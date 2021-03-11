import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './material.modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExpComponent } from './exp/exp.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    PerfilComponent,
    FooterComponent,
    FormacaoComponent,
    ExpComponent,
    CursosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
