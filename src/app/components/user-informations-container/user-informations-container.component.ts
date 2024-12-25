import { distinctUntilChanged, take } from 'rxjs';

import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { IUser } from '../../interfaces/user/user';
import { StatesList } from '../../type/states-list';
import { CountriesList } from '../../type/countries-list';
import { StatesService } from '../../services/states.service';
import { CountriesService } from '../../services/countries.service';
import { UserFormController } from './user-form-controller';

@Component({
    selector: 'app-user-informations-container',
    templateUrl: './user-informations-container.component.html',
    styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {
    currentTabIndex: number = 0;  // Define qual aba do TabsGroup será mostrada ao carregar a pagina.
    statesList: StatesList = [];
    countriesList: CountriesList = [];

    private readonly _statesService = inject(StatesService);
    private readonly _countriesService = inject(CountriesService);

    @Input({ required: true }) isInEditMode: boolean = false;
    @Input({ required: true }) userSelected: IUser = {} as IUser;

    @Output('onFormStatusChange') onFormStatusChangeEmitt = new EventEmitter<boolean>();
    @Output('onUserFormFirstChange') onUserFormFirstChangeEmitt = new EventEmitter<void>();

    ngOnInit() {
        this.onUserFormStatusChange();
        this.getCountriesList();
    };

    ngOnChanges(changes: SimpleChanges) {
        this.currentTabIndex = 0;

        const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;

        if (HAS_USER_SELECTED) {
            this.fulfillUserForm(this.userSelected);
            this.onUserFormFirstChange();
            this.getStatesList(this.userSelected.country);
        };
    };

    onCountrySelected(contryName: string) {
        this.getStatesList(contryName);
    };

    mostrarForm() {
        console.log(this.userForm);
    }
        
    private onUserFormFirstChange() {
        this.userForm.valueChanges
            .pipe(take(1))
            .subscribe(() => this.onUserFormFirstChangeEmitt.emit());
    };

    /**
     * onUserFormStatusChange
     * 
     * O objetivo do método é monitorar o status(Valid/Invalid) do useForm, porém
     * dependendo de como feito mostrará o status de todos os campos assim que 
     * forem verificados por seus validadores, causando assim inumeras chamadas desnecessárias
     * como mostra o código a seguir ao utiliza-lo.
     * 
     * Exemplo: 
     *      this.userForm.statusChanges.subscribe(console.log);
     * 
     * A validação que deve ser monitorada é se o formulário é válido ou não, para
     * isso, é necessário usar o método 'distinctUntilChanged' para que ele só mostre
     * o status quando o formulário for válido ou não.
     * 
     *      this.userForm.statusChanges.pipe(distinctUntilChanged()).subscribe(console.log);
     */
    private onUserFormStatusChange() {
        this.userForm.statusChanges
            .pipe(distinctUntilChanged())
            .subscribe(() => this.onFormStatusChangeEmitt.emit(this.userForm.valid));
    };

    private getStatesList(country: string) {
        this._statesService.getStates(country)
            .pipe(take(1))
            .subscribe((statesList: StatesList) => this.statesList = statesList);
    };

    private getCountriesList() {
        this._countriesService.getCountries()
            .pipe(take(1))
            .subscribe((countriesList: CountriesList) => this.countriesList = countriesList);
    };
}
