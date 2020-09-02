import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from './app-material/app-material.module';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VendedorComponent } from './components/vendedor/vendedor.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    LoginAdminComponent,
    AdministradorComponent,
    AdministradoresComponent,
    ProductosComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AppMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
