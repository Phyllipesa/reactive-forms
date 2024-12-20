import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatRadioModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatRadioModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
    ],
    providers: [
        { provide : MAT_DATE_LOCALE, useValue: 'pt-BR' }
    ]
})
export class AngularMaterialModule { }
