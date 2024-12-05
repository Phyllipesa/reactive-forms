import { IAddress } from "./address";
import { IDependent } from "./dependent";
import { IPhone } from "./phone";

export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: IPhone[];
    addressList: IAddress[];
    dependentsList: IDependent[];
}
