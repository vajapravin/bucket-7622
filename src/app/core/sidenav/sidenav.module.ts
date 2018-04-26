import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DesktopComponent,
    MobileComponent
  ],
  exports: [
    DesktopComponent,
    MobileComponent
  ]
})
export class SidenavModule { }