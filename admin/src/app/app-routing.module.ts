import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './view/home/home.component';


const routes: Routes = [
  {
    path:'login',
    loadChildren:()=> import('./view/login/login.module').then(mod=>mod.LoginModule)
  },
  {
    path:'',
    component: HomeComponent, 
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        loadChildren: () => import('./view/view.module').then(mod => mod.ViewModule)  
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
