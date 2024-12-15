import { IUser } from './interfaces/user/user';
import { UserService } from './services/users.service';
import { CitiesService } from './services/cities.service';
import { StatesService } from './services/states.service';
import { UserListResponse } from './type/user-list-response';
import { CountriesService } from './services/countries.service';

import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    isInEditMode: boolean = false;

    usersList: UserListResponse = [];

    userSelectedIndex: number | undefined;
    userSelected: IUser = {} as IUser;

    constructor(
        private readonly _citiesService: CitiesService,
        private readonly _statesService: StatesService,
        private readonly _countriesService: CountriesService,
        private readonly _usersService: UserService,
    ) { }

    ngOnInit() {
        // this._countriesService
        //     .getCountries()
        //     .subscribe((countriesResponse: any) => {
        //         console.log('countriesResponse', countriesResponse);
        //     });

        // this._statesService
        //     .getStates('Brazil')
        //     .subscribe((statesResponse: any) => {
        //         console.log('statesResponse', statesResponse);
        //     });

        // this._citiesService
        //     .getCities('Brazil', 'São Paulo')
        //     .subscribe((citiesResponse: any) => {
        //         console.log('citiesResponse', citiesResponse);
        //     });

        this._usersService
            .getUsers()
            .pipe(take(1))
            .subscribe((usersListResponse: any) => this.usersList = usersListResponse);
    }

    onUserSelected(userIndex: number) {
        const userFound = this.usersList[userIndex];

        if (userFound) {
            this.userSelectedIndex = userIndex;
            this.userSelected = structuredClone(userFound);
        }
    }

    onCancelButton() {
        this.isInEditMode = false;
    }

    onEditButton() {
        this.isInEditMode = true;
    }
}
