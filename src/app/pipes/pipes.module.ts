import { CpfPipe } from './cpf.pipe';
import { NgModule } from '@angular/core';
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhoneMaskPipe } from './phone-mask.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    PhoneMaskPipe,
    MaritalStatusPipe,
  ],
  exports: [
    CpfPipe,
    PhoneMaskPipe,
    MaritalStatusPipe,
  ],
})
export class PipesModule { }
