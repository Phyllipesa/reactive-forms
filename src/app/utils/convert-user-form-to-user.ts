import { IUser } from "../interfaces/user/user";
import { IUserForm } from "../interfaces/user-form/user-form";
import { PhoneList } from "../type/phone-list";
import { IUserFormPhone } from "../interfaces/user-form/user-form-phone";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-pt-br-date";
import { IUserFormGeneralInformations } from "../interfaces/user-form/user-form-general-informations";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = { ...convertGeneralInformations(userForm.generalInformations) };
    newUser.phoneList = convertPhoneList(userForm.contactInformations.phoneList);

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
    const newUserPhoneList: PhoneList = phoneList.map((phone: IUserFormPhone) => ({
        type: phone.type,
        internationalCode: phone.number.substring(0, 2),
        areaCode: phone.number.substring(2, 4),
        number: phone.number.substring(4),
    }));

    return newUserPhoneList;
};
