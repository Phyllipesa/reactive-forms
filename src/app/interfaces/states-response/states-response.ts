import { IStatesResponseData } from "./states-response-data";
import { IBaseStatesResponse } from "../base-states-response";

export interface IStatesResponse extends IBaseStatesResponse {
    data: IStatesResponseData;
};
