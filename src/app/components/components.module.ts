import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { PipesModule } from '../pipes/pipes.module';
import { UsersListComponent } from './users-list/users-list.component';
import { PhoneListComponent } from './contact-informations/components/phone-list/phone-list.component';
import { AddressListComponent } from './contact-informations/components/address-list/address-list.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { PhoneListEditComponent } from './contact-informations-edit/components/phone-list-edit/phone-list-edit.component';
import { DependenceListComponent } from './dependence-list/dependence-list.component';
import { AddressListEditComponent } from './contact-informations-edit/components/address-list-edit/address-list-edit.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { DependentsListEditComponent } from './dependents-list-edit/dependents-list-edit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { GeneralInformationsComponent } from './general-informations/general-informations.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { GeneralInformationsEditComponent } from './general-informations-edit/general-informations-edit.component';
import { ContactInformationsEditComponent } from './contact-informations-edit/contact-informations-edit.component';
import { UserInformationsContainerComponent } from './user-informations-container/user-informations-container.component';

@NgModule({
    declarations: [
        UsersListComponent,
        PhoneListComponent,
        AddressListComponent,
        UserInfoItemComponent,
        PhoneListEditComponent,
        DependenceListComponent,
        AddressListEditComponent,
        ButtonsContainerComponent,
        DependentsListEditComponent,
        ConfirmationDialogComponent,
        GeneralInformationsComponent,
        ContactInformationsComponent,
        GeneralInformationsEditComponent,
        ContactInformationsEditComponent,
        UserInformationsContainerComponent,
    ],
    imports: [
        PipesModule,
        CommonModule,
        NgxMaskDirective,
        ReactiveFormsModule,
        AngularMaterialModule,
    ],
    exports: [
        UsersListComponent,
        DependenceListComponent,
        ButtonsContainerComponent,
        ConfirmationDialogComponent,
        ContactInformationsComponent,
        GeneralInformationsComponent,
        UserInformationsContainerComponent,
    ],
    providers: [
        provideNgxMask(),
    ],
})
export class ComponentsModule { }
