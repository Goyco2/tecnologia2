import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

// Definisci le rotte per la tua app
const routes: Routes = [
  { path: '', component: LoginComponent }, // Pagina di login di default
  { path: 'map', component: MapComponent }  // Pagina della mappa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa le rotte
  exports: [RouterModule]
})
export class AppRoutingModule { }
