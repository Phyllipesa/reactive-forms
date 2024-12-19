import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { StatesList } from '../../type/states-list';
import { CountriesList } from '../../type/countries-list';
import { maritalStatusArray } from '../../utils/marital-type-description-map';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
    selector: 'app-general-informations-edit',
    templateUrl: './general-informations-edit.component.html',
    styleUrl: './general-informations-edit.component.scss'
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {
    statesListFiltered: StatesList = [];
    countriesListFiltered: CountriesList = [];

    @Input({ required: true }) userForm!: FormGroup;
    @Input({ required: true }) countriesList: CountriesList = [];
    @Input({ required: true }) statesList: StatesList = [];

    @Output('onCountrySelected') onCountrySelectedEmitt = new EventEmitter<string>();

    ngOnInit() {
        this.watchCountryFormChangeAndFilter();
        this.watchStateFormChangeAndFilter();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.countriesListFiltered = this.countriesList;
        this.statesListFiltered = this.statesList;
    }

    get maritalStatusArray() {
        return maritalStatusArray;
    }

    get emailControl(): FormControl {
        return this.userForm.get('generalInformations.email') as FormControl;
    }

    get countryControl(): FormControl {
        return this.userForm.get('generalInformations.country') as FormControl;
    }

    get stateControl(): FormControl {
        return this.userForm.get('generalInformations.state') as FormControl;
    }

    onCountrySelected(event: MatAutocompleteSelectedEvent) {
        this.onCountrySelectedEmitt.emit(event.option.value);
    }

    onStateSelected(event: MatAutocompleteSelectedEvent) {
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
        this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this));
        // this.countryControl.valueChanges.subscribe((value: string ) => this.filterCountriesList(value));
    }

    private watchStateFormChangeAndFilter() {
        this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
    }

    private filterCountriesList(searchTerm: string) {
        this.countriesListFiltered = this.countriesList.filter(
            (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
    }

    private filterStatesList(searchTerm: string) {
        this.statesListFiltered = this.statesList.filter(
            (state) => state.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
    }
}
