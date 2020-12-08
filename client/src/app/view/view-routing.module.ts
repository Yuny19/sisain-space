import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule)
            },
            {
                path: 'living-room',
                data:{
                    category : 'living room'
                },
                loadChildren: () => import('./content-product/content-product.module').then(mod => mod.ContentProductModule)
            },
            {
                path: 'bedroom',
                data:{
                    category : 'bedroom'
                },
                loadChildren: () => import('./content-product/content-product.module').then(mod => mod.ContentProductModule)
            },
            {
                path: 'dining-room',
                data:{
                    category : 'dining room'
                },
                loadChildren: () => import('./content-product/content-product.module').then(mod => mod.ContentProductModule)
            },
            {
                path: 'workspace',
                data:{
                    category : 'workspace'
                },
                loadChildren: () => import('./content-product/content-product.module').then(mod => mod.ContentProductModule)            },
            {
                path: 'decoration',
                data:{
                    category : 'decoration'
                },
                loadChildren: () => import('./content-product/content-product.module').then(mod => mod.ContentProductModule)
            },
            {
                path: 'login',
                loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
            },
            {
                path: 'shopping-cart', 
                canActivate:[AuthGuard],
                loadChildren: () => import('./shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule) 
            },
            {
                path:'product/:id',
                loadChildren: () => import('./detail-content/detail-content.module').then(mod => mod.DetailContentModule)
            },
            {
                path: 'payment/:id', 
                canActivate:[AuthGuard],
                loadChildren: () => import('./payment/payment.module').then(mod => mod.PaymentModule)
            },
            {
                path: 'user-info', 
                canActivate:[AuthGuard],
                loadChildren: () => import('./user-information/user-information.module').then(mod => mod.UserInformationModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ViewRoutingModule { }