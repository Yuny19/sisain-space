import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
            },
            {
                path: 'manage-user',
                loadChildren: () => import('./manage-user/manage-user.module').then(mod => mod.ManageUserModule)
            },
            {
                path: 'manage-product',
                loadChildren: () => import('./manage-product/manage-product.module').then(mod => mod.ManageProductModule)
            },
            {
                path: 'manage-transaction',
                loadChildren: () => import('./manage-transaction/manage-transaction.module').then(mod => mod.ManageTransactionModule)
            },
            {
                path: 'manage-expedition',
                loadChildren: () => import('./manage-expedition/manage-expedition.module').then(mod => mod.ManageExpeditionModule)
            },
            {
                path: 'manage-category',
                loadChildren: () => import('./manage-category/manage-category.module').then(mod => mod.ManageCategoryModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ViewRoutingModule { }