import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Per la gestione dei form (login)
import { RouterModule } from '@angular/router'; // Necessario per il routing
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module'; // Importa il modulo di routing

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  // Aggiungi AppRoutingModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
