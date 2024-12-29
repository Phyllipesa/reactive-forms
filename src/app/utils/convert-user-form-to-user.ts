import { IUser } from "../interfaces/user/user";
import { IUserForm } from "../interfaces/user-form/user-form";
import { IUserFormGeneralInformations } from "../interfaces/user-form/user-form-general-informations";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = {
        ...convertGeneralInformations(userForm.generalInformations),
    };

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
        birthDate: '',
    };
};
