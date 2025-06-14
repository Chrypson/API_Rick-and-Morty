import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './components/locations/locations.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  // Que ruta y que componente se va a abrir
  // La pagina de inicio tiene que ser Locaciones, de ahi elegir una
  // y se podra ver todos los personajes de esa locacion
  {path:"", component:LocationsComponent},
  {path:"locations", component:LocationsComponent},
  {path:"locations/:id", component:LocationsComponent},
  {path:"characters", component:CharactersComponent},
  {path:"characters/:id", component:CharactersComponent},
  {path:"details", component:DetailsComponent},
  {path:"details/:id", component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
