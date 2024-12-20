import { inject } from "@angular/core";

import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IUser } from "../../interfaces/user/user";
import { IAddress } from "../../interfaces/user/address";
import { PhoneList } from "../../type/phone-list";
import { IDependent } from "../../interfaces/user/dependent";
import { AddressList } from "../../type/address-list";
import { PhoneTypeEnum } from "../../enums/phone-type.enum";
import { DependentsList } from "../../type/dependents-list";
import { preparePhoneList } from "../../utils/prepare-phone-list";
import { convertPtBrDateToDateObj } from "../../utils/convert-pt-br-date-to-date-obj";

export class UserFormController {
    userForm!: FormGroup;
    
    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    private _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm();
    };

    get generalInformations() {
        return this.userForm.get('generalInformations') as FormGroup;
    };

    get phoneList() {
        return this.userForm.get('contactInformations.phoneList') as FormArray;
    };

    get addressList() {
        return this.userForm.get('contactInformations.addressList') as FormArray;
    };

    get dependentsList() {
        return this.userForm.get('dependentsList') as FormArray;
    };

    fulfillUserForm(user: IUser) {
        this.resetUserForm();
        this.fulfillGeneralInformations(user);
        this.fulfillPhoneList(user.phoneList);
        this.fulfillAddressList(user.addressList);
        this.fulfillDependentsList(user.dependentsList);
    };

    /**
     * Na parte de seleção de usuários, quando selecionamos um segundo usuário 
     * há uma duplicação de dados no formulário, por isso, é necessário resetar
     * o formulário a cada seleção para evitar duplicação de dados.
     */
    private resetUserForm() {
        this.userForm.reset(); //Reseta o FormGroup

        this.generalInformations.reset();

        this.phoneList.reset();
        this.phoneList.clear(); // o clear remove todos os controles de um FormArray

        this.addressList.reset();
        this.addressList.clear();

        this.dependentsList.reset();
        this.dependentsList.clear();
    };

    private fulfillDependentsList(userDependentsList: DependentsList) {
        userDependentsList.forEach((dependent: IDependent) => {
            this.dependentsList.push(this._fb.group({
                name: [dependent.name, Validators.required],
                age: [dependent.age, Validators.required],
                document: [dependent.document, Validators.required],
            }));
        });
    };

    private fulfillAddressList(addressList: AddressList) {
        addressList.forEach((address: IAddress) => {
            this.addressList.push(this._fb.group({
                type: [address.type, Validators.required],
                street: [address.street, Validators.required],
                complement: [address.complement, Validators.required],
                country: [address.country, Validators.required],
                state: [address.state, Validators.required],
                city: [address.city, Validators.required],
            }));
        });
    };
    
    private fulfillPhoneList(userphoneList: PhoneList) {
        preparePhoneList(userphoneList, false, (phone) => {
            const phoneValidators = phone.type === PhoneTypeEnum.EMERGENCY ? [] : [Validators.required];
            this.phoneList.push(this._fb.group({
                type: [phone.type],
                typeDescription: [phone.typeDescription],
                number: [phone.phoneNumber, phoneValidators,]
            }));
        });
    };

    private fulfillGeneralInformations(user: IUser) {
        const newuser = {
            ...user,
            birthDate: convertPtBrDateToDateObj(user.birthDate)
        };

        this.generalInformations.patchValue(newuser);
    };

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
                monthlyIncome: [null, Validators.required],
                birthDate: ['', Validators.required],
            }),
            contactInformations: this._fb.group({
                phoneList: this._fb.array([]),
                addressList: this._fb.array([]),
            }),
            dependentsList: this._fb.array([]),
        });
    };
};
