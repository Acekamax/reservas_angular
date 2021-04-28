import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
    
  },{
    path:"login",
    component:LoginComponent
  }
,{
  path:"register",
  component:RegisterComponent
}
,{
  path:"layout",
  component:LayoutComponent
}
,{
  path:"reservas",
  component:ReservasComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
