import { IUserFormDependent } from "./user-form-dependent"
import { IUserFormContactInformations } from "./user-form-contact-informations"
import { IUserFormGeneralInformations } from "./user-form-general-informations"

export interface IUserForm {
    generalInformations: IUserFormGeneralInformations;
    contactInformations: IUserFormContactInformations;
    dependentsList: IUserFormDependent[];
};
