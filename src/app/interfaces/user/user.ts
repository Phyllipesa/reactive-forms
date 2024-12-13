import { PhoneList } from "../../type/phone-list";
import { IDependent } from "./dependent";
import { AddressList } from "../../type/address-list";

export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: PhoneList;
    addressList: AddressList;
    dependentsList: IDependent[];
}
