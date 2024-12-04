import { CitiesService } from './services/cities.service';
import { StatesService } from './services/states.service';
import { CountriesService } from './services/countries.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    constructor(
        private readonly _citiesService: CitiesService,
        private readonly _statesService: StatesService,
        private readonly _countriesService: CountriesService,
        private readonly _usersService: UserService,
    ) { }

    ngOnInit() {
        this._countriesService
            .getCountries()
            .subscribe((countriesResponse: any) => {
                console.log('countriesResponse', countriesResponse);
            });

        this._statesService
            .getStates('Brazil')
            .subscribe((statesResponse: any) => {
                console.log('statesResponse', statesResponse);
            });

        this._citiesService
            .getCities('Brazil', 'São Paulo')
            .subscribe((citiesResponse: any) => {
                console.log('citiesResponse', citiesResponse);
            });

        this._usersService
            .getUsers()
            .subscribe((usersListResponse: any) => {
                console.log('usersResponse', usersListResponse);
            });
    }
}
