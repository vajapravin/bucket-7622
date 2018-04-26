import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule
  ],
  providers: []
})
export class CoreModule { }
