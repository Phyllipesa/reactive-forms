import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { PhoneListComponent } from './contact-informations/components/phone-list/phone-list.component';
import { AddressListComponent } from './contact-informations/components/address-list/address-list.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { DependenceListComponent } from './dependence-list/dependence-list.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { GeneralInformationsComponent } from './general-informations/general-informations.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { GeneralInformationsEditComponent } from './general-informations-edit/general-informations-edit.component';
import { UserInformationsContainerComponent } from './user-informations-container/user-informations-container.component';

@NgModule({
    declarations: [
        UsersListComponent,
        PhoneListComponent,
        AddressListComponent,
        UserInfoItemComponent,
        DependenceListComponent,
        ButtonsContainerComponent,
        GeneralInformationsComponent,
        ContactInformationsComponent,
        GeneralInformationsEditComponent,
        UserInformationsContainerComponent,
    ],
    imports: [
        PipesModule,
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [
        UsersListComponent,
        DependenceListComponent,
        ButtonsContainerComponent,
        GeneralInformationsComponent,
        ContactInformationsComponent,
        UserInformationsContainerComponent,
    ],
})
export class ComponentsModule { }
