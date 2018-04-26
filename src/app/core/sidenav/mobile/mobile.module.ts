import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MobileComponent
  ],
  exports: [
    MobileComponent
  ]
})
export class MobileModule { }