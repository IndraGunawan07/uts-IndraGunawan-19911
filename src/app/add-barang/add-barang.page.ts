import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarangService } from '../barang/barang.service';

@Component({
  selector: 'app-add-barang',
  templateUrl: './add-barang.page.html',
  styleUrls: ['./add-barang.page.scss'],
})
export class AddBarangPage implements OnInit {
  form: FormGroup;
  public jenis: string = null;

  constructor(
    private barangService: BarangService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      imageUrl: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jenis: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
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
      ukuran: new FormControl(null, {
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
    console.log(this.form);
    this.barangService.addProduct(this.form);
    this.router.navigate(['/barang']);
  }

}
