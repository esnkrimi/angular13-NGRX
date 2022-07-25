import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  bootstrap: [LazyComponent],

})
export class LazyModule { }
