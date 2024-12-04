import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CitiesService {
    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getCities(countryName: string, stateName: string): Observable<any> {
        const body = { country: countryName, state: stateName }
        return this._httpClient
            .post<any>('https://countriesnow.space/api/v0.1/countries/state/cities', body)
            .pipe(
                map(({ data }) => {
                    return data;
                }),
            );
    }
}