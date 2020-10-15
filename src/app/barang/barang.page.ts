import { Component, OnInit } from '@angular/core';
import { Barang } from './barang.model';
import { BarangService } from './barang.service';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.page.html',
  styleUrls: ['./barang.page.scss'],
})
export class BarangPage implements OnInit {
  products: Barang[];
  public list: boolean;

  constructor(
    private barangService: BarangService
  ) { }

  ngOnInit() {
    this.list = true;
  }

  ionViewWillEnter(){
    this.products = this.barangService.getAllProduct();
  }

  isList(){
    this.list = !this.list;
  }
}
