import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Barang } from 'src/app/barang/barang.model';
import { BarangService } from 'src/app/barang/barang.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  form: FormGroup;
  editedProduct: Barang;

  constructor(
    private activatedRoute: ActivatedRoute,
    private barangService: BarangService,
    private router: Router,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productMerk')) { return; }
      const productMerk = paramMap.get('productMerk');
      this.editedProduct = this.barangService.getProduct(productMerk);
    });

    this.form = new FormGroup({
      image: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(this.editedProduct.merk, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.editedProduct.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      baseclock: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      boostclock: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      corecount: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      threadcount: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      ukran: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      speed: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      brand: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      }),
      chipset: new FormControl(null, {
        updateOn: 'blur'
        // validators: [Validators.required]
      })
    });
  }

  onSubmit(){
    this.barangService.editProduct(this.form, this.editedProduct.merk);
    this.presentLoading();
    this.router.navigate(['/admin']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Produk berhasil diupdate!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Update product...',
      duration: 500
    });

    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed');
    this.presentToast();
  }

}
