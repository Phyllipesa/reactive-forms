import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { IUser } from "../../interfaces/user/user";
import { IPhone } from "../../interfaces/user/phone";
import { PhoneList } from "../../type/phone-list";
import { AddressList } from "../../type/address-list";
import { IAddress } from "../../interfaces/user/address";

export class UserFormController {
    userForm!: FormGroup;
    
    private _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm();
    }

    get generalInformations() {
        return this.userForm.get('generalInformations') as FormGroup;
    }

    get phoneList() {
        return this.userForm.get('contactInformations.phoneList') as FormArray;
    }

    get addressList() {
        return this.userForm.get('contactInformations.addressList') as FormArray;
    }

    fulfillUserForm(user: IUser) {
        this.fulfillGeneralInformations(user);
        this.fulfillPhoneList(user.phoneList);
        this.fulfillAddressList(user.addressList);       
    }

    fulfillAddressList(addressList: AddressList) {
        addressList.forEach((address: IAddress) => {
            this.addressList.push(this._fb.group({
                type: [address.type, Validators.required],
                street: [address.street, Validators.required],
                complement: [address.complement, Validators.required],
                country: [address.country, Validators.required],
                state: [address.state, Validators.required],
                city: [address.city, Validators.required],
            }));
        })
    }
    
    private fulfillPhoneList(userphoneList: PhoneList) {
        userphoneList.forEach((phone: IPhone) => {
            this.phoneList.push(this._fb.group({
                type: [phone.type, Validators.required],
                areaCode: [phone.areaCode, Validators.required],
                internationalCode: [phone.internationalCode, Validators.required],
                number: [phone.number, Validators.required],
            }));
        });
    }

    private fulfillGeneralInformations(user: IUser) {
        this.generalInformations.patchValue(user);
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
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
        })
    }

}