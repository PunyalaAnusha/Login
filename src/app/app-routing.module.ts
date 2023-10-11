import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import("./login/login.module").then (x=>x.LoginModule)},
  {path:'register',loadChildren:()=>import("./register/register.module").then(x=>x.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
