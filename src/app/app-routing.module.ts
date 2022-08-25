import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilhoComponent } from './filho/filho.component';
import { PaginaExternaComponent } from './pagina-externa/pagina-externa.component';
import { PaiComponent } from './pai/pai.component';

const routes: Routes = [
  {path:'', component: PaiComponent, pathMatch:'full'},
  {path: 'filho', component: FilhoComponent},
  {path: 'pai', component: PaiComponent},
  {path: 'pagina-externa', component: PaginaExternaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
