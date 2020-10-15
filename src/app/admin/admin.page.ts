import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { Barang } from '../barang/barang.model';
import { BarangService } from '../barang/barang.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  products: Barang[];
  constructor(
    private barangService: BarangService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.products = this.barangService.getAllProduct();
  }

  delete(barang: Barang){
    this.barangService.deleteProduct(barang.merk);
    this.presentLoading();
    this.products = this.barangService.getAllProduct();
  }

  async presentAlert(barang: Barang, slidingItem: IonItemSliding){
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Apakah anda yakin?',
      message: 'Apakah anda ingin menghapus produk ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.delete(barang)
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Produk berhasil dihapus',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Menghapus product...',
      duration: 500
    });

    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed');
    this.presentToast();
  }
}
