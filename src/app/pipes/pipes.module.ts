import { CpfPipe } from './cpf.pipe';
import { NgModule } from '@angular/core';
import { MaritalStatusPipe } from './marital-status.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    MaritalStatusPipe,
  ],
  exports: [
    CpfPipe,
    MaritalStatusPipe,
  ],
})
export class PipesModule { }
