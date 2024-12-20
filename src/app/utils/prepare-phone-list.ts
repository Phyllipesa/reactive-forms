import { IPhone } from "../interfaces/user/phone";
import { PhoneList } from "../type/phone-list";
import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { IPhoneToDisplay } from "../interfaces/phone-to-display";
import { phoneTypeDescriptionMap } from "./phone-type-description-map";

/** preparePhoneList
 * 
 *  @description
 *  Monta a lista de telefones para serem exibidos na tela:
 * 
 *   - Se for para exibir, o "formatPhoneNumberToDisplay" formata o número para exibição
 *      ex: +55 11 99999-9999
 *   - Caso não tenha telefone exibi '-'

 * 
 *   - Se for para editar, o "formatPhoneNumberToEdit" formata o número para edição
 *      ex: 5511999999999
 *   - Caso não tenha telefone exibi ''
 * 
 *  @param originalUserPhoneList 
 *  @param isDisplayPhone 
 *  @param callback 
 */
export const preparePhoneList = (
        originalUserPhoneList: PhoneList,
        isDisplayPhone: boolean,
        callback: (phone: IPhoneToDisplay) => void
    ) => {
        Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
            const phoneFound = originalUserPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType);

            let phoneNumber = '';

            if (isDisplayPhone) {
                phoneNumber = phoneFound ? formatPhoneNumberToDisplay(phoneFound) : '-';
            } else {
                phoneNumber = phoneFound ? formatPhoneNumberToEdit(phoneFound) : '';
            }

            callback({
                type: phoneType,
                typeDescription: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
                phoneNumber,
            });
        });
};

const formatPhoneNumberToDisplay = (phone: IPhone) => {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
};

const formatPhoneNumberToEdit = (phone: IPhone) => {
    return `${phone.internationalCode}${phone.areaCode}${phone.number}`.replace(/[+\-]/g, '');
};