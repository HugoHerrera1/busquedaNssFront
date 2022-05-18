import { CCGrupalEspecificaComponent } from './cronicaGrupal/c-cgrupal-especifica/c-cgrupal-especifica.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DeclarationListEmitMode } from '@angular/compiler';
import { BusquedaNssComponent } from './busqueda-nss/busqueda-nss.component';
import { AppTarjetaPresentacionComponent } from './app-tarjeta-presentacion/app-tarjeta-presentacion.component';

const routes: Routes = [
  {path: 'busqueda', component: BusquedaNssComponent},
  {path: 'tarjeta', component: AppTarjetaPresentacionComponent},
  {path: 'busquedaEspecifica', component: CCGrupalEspecificaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule,
    HttpClientModule]

})
export class AppRoutingModule { }
