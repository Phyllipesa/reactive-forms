import { PhoneList } from "../../type/phone-list";
import { IAddress } from "./address";
import { IDependent } from "./dependent";

export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: PhoneList;
    addressList: IAddress[];
    dependentsList: IDependent[];
}
