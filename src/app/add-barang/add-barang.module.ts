import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBarangPageRoutingModule } from './add-barang-routing.module';

import { AddBarangPage } from './add-barang.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddBarangPageRoutingModule
  ],
  declarations: [AddBarangPage]
})
export class AddBarangPageModule {}
