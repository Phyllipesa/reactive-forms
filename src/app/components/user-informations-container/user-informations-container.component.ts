import { take } from 'rxjs';

import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { IUser } from '../../interfaces/user/user';
import { CountriesList } from '../../type/countries-list';
import { CountriesService } from '../../services/countries.service';
import { UserFormController } from './user-form-controller';

@Component({
    selector: 'app-user-informations-container',
    templateUrl: './user-informations-container.component.html',
    styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {
    currentTabIndex: number = 0;  // Define qual aba do TabsGroup será mostrada ao carregar a pagina.
    countriesList: CountriesList = [];

    private readonly _countriesService = inject(CountriesService);

    @Input({ required: true }) isInEditMode: boolean = false;
    @Input({ required: true }) userSelected: IUser = {} as IUser;

    ngOnInit() {
        this.getCountriesList();
    }
    
    ngOnChanges(changes: SimpleChanges) {
        this.currentTabIndex = 0;
        
        const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;
        
        if (HAS_USER_SELECTED) {
            this.fulfillUserForm(this.userSelected);
        }
    }

    private getCountriesList() {
        this._countriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList)=> {
            this.countriesList = countriesList
        });
    }
}
