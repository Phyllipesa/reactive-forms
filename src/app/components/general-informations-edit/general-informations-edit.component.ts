import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { CountriesList } from '../../type/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
    selector: 'app-general-informations-edit',
    templateUrl: './general-informations-edit.component.html',
    styleUrl: './general-informations-edit.component.scss'
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {
    @Input({ required: true }) userForm!: FormGroup;
    @Input({ required: true }) countriesList: CountriesList = [];
    countriesListFiltered: CountriesList = [];

    ngOnInit() {
        this.watchCountryFormChangeAndFilter();
        console.log(this.userForm);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.countriesListFiltered = this.countriesList;
    }

    get emailControl(): FormControl {
        return this.userForm.get('generalInformations.email') as FormControl;
    }

    get countryControl(): FormControl {
        return this.userForm.get('generalInformations.country') as FormControl;
    }

    onCountrySelected(event: MatAutocompleteSelectedEvent) {
        console.log(event.option.value);
    }

    /**
     * Passando "this.filterCountriesList" o subscribe não sabe o contexto do "this.filterCountriesList"
     * que estamos passando. Na função interna do subscribe o contexto é diferente, ele não sabe ao que o "this"
     * se referência, não sabe que o "this" esta fazendo referência a nossa classe GeneralInformationsEditComponent.
     * 
     * Para resolver isso, podemos usar o bind para passar o contexto da classe 
     *  - this.filterCountriesList.bind(this)
     */
    private watchCountryFormChangeAndFilter() {
        this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this)); // 
        // this.countryControl.valueChanges.subscribe((value: string ) => this.filterCountriesList(value));
    }

    private filterCountriesList(searchTerm: string) {
        this.countriesListFiltered = this.countriesList.filter(
            (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
    }
}
