import { AddressTypeEnum } from "../enums/address-type.enum";

export const addressTypeDescriptionMap: { [key in AddressTypeEnum]: string } = {
    [AddressTypeEnum.RESIDENTIAL]: 'Residencial',
    [AddressTypeEnum.WORK]: 'trabalho',
    [AddressTypeEnum.ALTERNATIVE]: 'alternativo',
};
