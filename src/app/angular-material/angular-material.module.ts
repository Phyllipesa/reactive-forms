import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
    ],
})
export class AngularMaterialModule { }
