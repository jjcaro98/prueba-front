import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { ProgramaPageComponent } from './Components/pages/programa-page/programa-page.component';
import { SearchPageComponent } from './Components/pages/search-page/search-page.component';

const routes: Routes = [
  {path:'estudiantes',component:HomeComponent},
  {path:'programas',component:ProgramaPageComponent},
  {path:'search',component:SearchPageComponent},
  {path:'',pathMatch:'full', redirectTo:'estudiantes'},
  {path:'**',pathMatch:'full', redirectTo:'estudiantes'},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
