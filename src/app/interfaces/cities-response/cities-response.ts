import { CitiesList } from "../../type/cities-list";
import { IBaseCountriesResponse } from "../base-countries-response";

export interface ICitiesResponse extends IBaseCountriesResponse {
    data: CitiesList;
};
