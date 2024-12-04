import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IStatesResponse } from "../interfaces/states-response/states-response";
import { StatesList } from "../type/states-list";

@Injectable({
    providedIn: 'root'
})
export class StatesService {

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    getStates(countryName: string): Observable<StatesList> {
        const country = { country: countryName }
        return this._httpClient
            .post<IStatesResponse>('https://countriesnow.space/api/v0.1/countries/states', country)
            .pipe(
                map(({ data: { states } }) => {
                    return states;
                }),
            );
    }
}