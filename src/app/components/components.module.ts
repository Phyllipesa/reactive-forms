import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { PhoneListComponent } from './contact-informations/components/phone-list/phone-list.component';
import { AddressListComponent } from './contact-informations/components/address-list/address-list.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { GeneralInformationsComponent } from './general-informations/general-informations.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';

@NgModule({
    declarations: [
        UsersListComponent,
        PhoneListComponent,
        AddressListComponent,
        UserInfoItemComponent,
        GeneralInformationsComponent,
        ContactInformationsComponent,
    ],
    imports: [
        PipesModule,
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [
        UsersListComponent,
        GeneralInformationsComponent,
        ContactInformationsComponent,
    ],
})
export class ComponentsModule { }
