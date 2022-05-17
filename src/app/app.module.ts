import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaNssComponent } from './busqueda-nss/busqueda-nss.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppAlertsComponent } from './app-alerts/app-alerts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from "ngx-pagination";
import { AppTarjetaPresentacionComponent } from './app-tarjeta-presentacion/app-tarjeta-presentacion.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaNssComponent,
    AppMenuComponent,
    AppAlertsComponent,
    AppTarjetaPresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
