import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InstructionComponent } from './pages/instruction/instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Aggiungi HttpClientModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
