import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarangPage } from './barang.page';

describe('BarangPage', () => {
  let component: BarangPage;
  let fixture: ComponentFixture<BarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
