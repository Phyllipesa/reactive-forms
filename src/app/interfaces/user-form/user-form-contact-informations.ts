import { IUserFormPhone } from "./user-form-phone"
import { IUserFormAddress } from "./user-form-address"

export interface IUserFormContactInformations {
    phoneList: IUserFormPhone[];
    addressList: IUserFormAddress[];
};
