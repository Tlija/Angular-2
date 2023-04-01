import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},


  ]},


  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',loadChildren:()=>import('./views/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'addproduct',loadChildren:()=>import('./views/addproduct/addproduct.module').then(m=>m.AddproductModule)},
    {path:'addstudent',loadChildren:()=>import('./views/add-studient/add-studient.module').then(m=>m.AddStudientModule)},
    {path:'signin',loadChildren:()=>import('./views/signin/signin.module').then(m=>m.SigninModule)},
    {path:'alluser',loadChildren:()=>import('./views/all-users/all-users.module').then(m=>m.AllUsersModule)},
    {path:'allproduct',loadChildren:()=>import('./views/allproduct/allproduct.module').then(m=>m.AllproductModule)}





  ]},
  {path:'user',component:UserLayoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
