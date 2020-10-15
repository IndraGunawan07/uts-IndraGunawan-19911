import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangPage } from './barang.page';

const routes: Routes = [
  {
    path: '',
    component: BarangPage
  },
  {
    path: ':productName',
    loadChildren: () => import('./barang-detail/barang-detail.module').then( m => m.BarangDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangPageRoutingModule {}
