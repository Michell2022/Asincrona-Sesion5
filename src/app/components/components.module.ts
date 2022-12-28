import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumaComponent } from './suma/suma.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SumaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SumaComponent
  ]
})
export class ComponentsModule { }
