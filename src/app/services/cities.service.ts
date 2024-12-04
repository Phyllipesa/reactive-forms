import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CitiesList } from "../type/cities-list";
import { ICitiesResponse } from "../interfaces/cities-response/cities-response";

@Injectable({
    providedIn: 'root'
})
export class CitiesService {
    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getCities(countryName: string, stateName: string): Observable<CitiesList> {
        const body = { country: countryName, state: stateName }
        return this._httpClient
            .post<ICitiesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', body)
            .pipe(
                map(({ data }) => {
                    return data;
                }),
            );
    }
}