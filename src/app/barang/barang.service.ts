import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Barang } from './barang.model';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  private product: Barang[] = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/proxy/WiwozB0Hdp-FoUqboNjGCKsoGmvDb4tT-I7gl3V5-rmfKEm50hi3rXeMq3L17LbCLwNNdgxIkJYt_HTUETLkTJZgRz3FGTrDJPWDBBD-LOnET3H2YaZ5ENJyN9r0Z25R',
      jenis: 'Processor',
      merk: 'Intel',
      model: 'Core i9',
      harga: '20000',
      stok: '15',
      baseclock: '2.8',
      boostclock: '3.9',
      corecount: '6',
      threadcount: '12',
      ukuran: null,
      speed: null,
      brand: null,
      chipset: null
    },
    {
      imageUrl: 'https://cf.shopee.co.id/file/3b3320accaa7d3b49eb9d66d23cb13b3',
      jenis: 'Motherboard',
      merk: 'ASRock',
      model: 'B550 B',
      harga: '270000',
      stok: '17',
      baseclock: null,
      boostclock: null,
      corecount: null,
      threadcount: null,
      ukuran: null,
      speed: null,
      brand: 'intel',
      chipset: 'intel'
    },
    {
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/514km%2BZccrL._AC_SL1000_.jpg',
      jenis: 'GPU',
      merk: 'Nvidia',
      model: 'RTX 2080 TI',
      harga: '270000',
      stok: '20',
      baseclock: null,
      boostclock: null,
      corecount: null,
      threadcount: null,
      ukuran: null,
      speed: null,
      brand: null,
      chipset: null
    }
  ];
  constructor() { }

  getAllProduct(){
    return [...this.product];
  }

  getProduct(productName: string){
    return {...this.product.find(barang => {
      return barang.merk === productName;
    })};
  }

  addProduct(form: FormGroup)
  {
    if (form.value.jenis === 'processor')
    {
      const temp: Barang = {
        imageUrl: form.value.imageUrl,
        jenis: form.value.jenis,
        merk: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,
        boostclock: form.value.boostclock,
        baseclock: form.value.baseclock,
        corecount: form.value.corecount,
        threadcount: form.value.threadcount,
        ukuran: null,
        speed: null,
        brand: null,
        chipset: null
      };
      console.log(temp);
      this.product.push(temp);
      console.log(this.product);
    }
    else if (form.value.jenis === 'ram')
    {
      const temp: Barang = {
        imageUrl: form.value.imageUrl,
        jenis: form.value.jenis,
        merk: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,
        boostclock: null,
        baseclock: null,
        corecount: null,
        threadcount: null,
        ukuran: form.value.ukuran,
        speed: form.value.speed,
        brand: null,
        chipset: null
      };
      console.log(temp);
      this.product.push(temp);
      console.log(this.product);
    }
    else if (form.value.jenis === 'motherboard')
    {
      const temp: Barang = {
        imageUrl: form.value.imageUrl,
        jenis: form.value.jenis,
        merk: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,
        boostclock: null,
        baseclock: null,
        corecount: null,
        threadcount: null,
        ukuran: null,
        speed: null,
        brand: form.value.brand,
        chipset: form.value.chipset
      };
      console.log(temp);
      this.product.push(temp);
      console.log(this.product);
    }
    else if (form.value.jenis === 'gpu')
    {
      const temp: Barang = {
        imageUrl: form.value.imageUrl,
        jenis: form.value.jenis,
        merk: form.value.merek,
        model: form.value.model,
        harga: form.value.harga,
        stok: form.value.stok,
        boostclock: null,
        baseclock: null,
        corecount: null,
        threadcount: null,
        ukuran: null,
        speed: null,
        brand: null,
        chipset: null
      };
      console.log(temp);
      this.product.push(temp);
      console.log(this.product);
    }
  }

  editProduct(form: FormGroup, merk: string){
    const length = this.product.length;
    let i = 0;
    console.log(form.value.merk);
    for (i = 0; i < length; i++)
    {
      if (this.product[i].merk === merk)
      {
        // console.log('bos' + this.contacts[i].name);
        this.product[i].imageUrl = form.value.image;
        this.product[i].merk = form.value.merk;
        this.product[i].model = form.value.model;
        this.product[i].harga = form.value.harga;
        this.product[i].stok = form.value.stok;
        this.product[i].baseclock = form.value.baseclock;
        this.product[i].boostclock = form.value.boostclock;
        this.product[i].corecount = form.value.corecount;
        this.product[i].threadcount = form.value.threadcount;
        this.product[i].ukuran = form.value.ukuran;
        this.product[i].speed = form.value.speed;
        this.product[i].brand = form.value.brand;
        this.product[i].chipset = form.value.chipset;
        console.log(this.product[i]);
      }
    }
  }

  deleteProduct(barangMerk: string){
    this.product = this.product.filter(barangs => {
      return barangs.merk !== barangMerk;
    });
    console.log(this.product);
  }
}
