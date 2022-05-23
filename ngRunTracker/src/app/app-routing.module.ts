import { CreateRunComponent } from './components/create-run/create-run.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgbdTableFiltering } from './components/table-filtering/table-filtering.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: NgbdTableFiltering },
  { path: 'runs', component: NgbdTableFiltering },
  { path: 'runs/create', component: CreateRunComponent },
  { path: 'run/:id', component: NgbdTableFiltering }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
