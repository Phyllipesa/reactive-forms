import { CountriesList } from "../../type/countries-list";
import { IBaseCountriesResponse } from "../base-countries-response";

export interface ICountriesResponse extends IBaseCountriesResponse {
    data: CountriesList;
}
