import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NkButtonComponent } from './nk-button.component';



@NgModule({
  declarations: [
    NkButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    NkButtonComponent
  ]
})
export class NkButtonModule { }
