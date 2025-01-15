import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstructionComponent } from './pages/instruction/instruction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instructions/:setNumber', component: InstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
