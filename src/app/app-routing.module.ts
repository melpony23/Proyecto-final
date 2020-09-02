import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';

const routes: Routes = [
  {path:"", component:LoginUsuarioComponent},
  {path:"login-admin", component:LoginAdminComponent},
  {path:"productos", component:ProductosComponent},
  {path:"vendedores", component:VendedorComponent},
  {path:"administradores", component:AdministradoresComponent},
  {path:"administrador", component:AdministradorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
