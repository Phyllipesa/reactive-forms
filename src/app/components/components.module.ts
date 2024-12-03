import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    PipesModule,
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
