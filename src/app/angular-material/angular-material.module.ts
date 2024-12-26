import { NgModule } from '@angular/core';

import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core'; 

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { 
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent,
    } from '@angular/material/dialog';

@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatDialogTitle,
        MatDialogClose,
        MatButtonModule,
        MatDialogContent,
        MatDialogActions,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatDialogTitle,
        MatDialogClose,
        MatButtonModule,
        MatDialogContent,
        MatDialogActions,
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
