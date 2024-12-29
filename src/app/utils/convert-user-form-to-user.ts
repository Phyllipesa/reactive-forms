import { IUser } from "../interfaces/user/user";
import { IUserForm } from "../interfaces/user-form/user-form";
import { PhoneList } from "../type/phone-list";
import { AddressList } from "../type/address-list";
import { IUserFormPhone } from "../interfaces/user-form/user-form-phone";
import { IUserFormAddress } from "../interfaces/user-form/user-form-address";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-pt-br-date";
import { IUserFormGeneralInformations } from "../interfaces/user-form/user-form-general-informations";
import { IUserFormDependent } from "../interfaces/user-form/user-form-dependent";
import { DependentsList } from "../type/dependents-list";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = { ...convertGeneralInformations(userForm.generalInformations) };
    newUser.phoneList = [ ...convertPhoneList(userForm.contactInformations.phoneList) ];
    newUser.addressList = [ ... convertAddresList(userForm.contactInformations.addressList) ];
    newUser.dependentsList = [ ... convertDependentsList(userForm.dependentsList) ];

    return newUser as IUser;
};

const convertGeneralInformations = (
    generalInformations: IUserFormGeneralInformations
): Partial<IUser> => {
    return {
        name: generalInformations.name,
        email: generalInformations.email,
        country: generalInformations.country,
        state: generalInformations.state,
        maritalStatus: generalInformations.maritalStatus,
        monthlyIncome: generalInformations.monthlyIncome,
        birthDate: convertDateObjToPtBrDate(generalInformations.birthDate),
    };
};

const convertPhoneList = (phoneList: IUserFormPhone[]): PhoneList => {
    const newUserPhoneList: PhoneList = phoneList.map(
        (phone: IUserFormPhone) => ({
        type: phone.type,
        internationalCode: phone.number.substring(0, 2),
        areaCode: phone.number.substring(2, 4),
        number: phone.number.substring(4),
    }));

    return newUserPhoneList;
};

const convertAddresList = (addressList: IUserFormAddress[]): AddressList => {
    const newUserAddressList: AddressList = addressList.map(
        (address: IUserFormAddress) => ({
            type: address.type,
            street: address.street,
            complement: address.complement,
            country: address.country,
            state: address.state,
            city: address.city,
        })
    );

    return newUserAddressList;
};

const convertDependentsList = (dependentsList: IUserFormDependent[]): DependentsList => {
    const newUserDependentsList: DependentsList = dependentsList.map(
        (dependent: IUserFormDependent) => ({
            name: dependent.name,
            age: Number(dependent.age),
            document: Number(dependent.document),
        })
    );

    return newUserDependentsList;
};
