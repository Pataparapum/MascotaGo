import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerCargaComponent } from './spinner-carga/spinner-carga.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SpinnerCargaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SpinnerCargaComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
