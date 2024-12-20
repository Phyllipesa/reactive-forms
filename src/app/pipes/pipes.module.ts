import { CpfPipe } from './cpf.pipe';
import { NgModule } from '@angular/core';

import { PhoneMaskPipe } from './phone-mask.pipe';
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhonePlaceholderPipe } from './phone-placeholder.pipe';

@NgModule({
  declarations: [
    CpfPipe,
    PhoneMaskPipe,
    MaritalStatusPipe,
    PhonePlaceholderPipe,
  ],
  exports: [
    CpfPipe,
    PhoneMaskPipe,
    MaritalStatusPipe,
    PhonePlaceholderPipe,
  ],
})
export class PipesModule { }
