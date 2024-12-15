import { PhoneList } from "../../type/phone-list";
import { AddressList } from "../../type/address-list";
import { DependentsList } from "../../type/dependents-list";

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
    dependentsList: DependentsList;
}
