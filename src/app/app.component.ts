import { take } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';

import { IUser } from './interfaces/user/user';
import { UserService } from './services/users.service';
import { UserListResponse } from './type/user-list-response';
import { UpdateUserService } from './services/update-user-service';
import { convertUserFormToUser } from './utils/convert-user-form-to-user';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data';
import { UserFormRawValueService } from './services/user-form-raw-value.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    isInEditMode: boolean = false;
    enableSaveButton: boolean = false;
    userFormUpdated: boolean = false;

    usersList: UserListResponse = [];

    userSelectedIndex: number | undefined;
    userSelected: IUser = {} as IUser;

    constructor(
        private readonly _usersService: UserService,
        private readonly _updateUserService: UpdateUserService,
        private readonly _matDialog: MatDialog,
        private readonly _userFormRawValueService: UserFormRawValueService,
    ) {};

    ngOnInit() {
        this._usersService
            .getUsers()
            .pipe(take(1))
            .subscribe((usersListResponse: any) => this.usersList = usersListResponse);
    };

    onUserSelected(userIndex: number) {
        const userFound = this.usersList[userIndex];

        if (userFound) {
            this.userSelectedIndex = userIndex;
            this.userSelected = structuredClone(userFound);
        };
    };

    onCancelButton() {
        if (this.userFormUpdated) {
            this.openConfirmationDialog(
                {
                    title: 'O Formulário foi alterado',
                    message: 'Deseja realmente cancelar as alterações feitas no formulário?',
                },
                (value: boolean) => {
                    if (!value) return;

                    this.isInEditMode = false;
                    this.userFormUpdated = false;
                }
            );
        }
        else {
            this.isInEditMode = false;
        };
    };

    onSaveButton() {
        this.openConfirmationDialog(
            {
                title: 'Confirmar alteração de dados',
                message: 'Deseja realmente salvar os valores alterados?',
            },
            (value: boolean) => {
                if (!value) return;

                this.saveUserInfos();

                this.isInEditMode = false;
                this.userFormUpdated = false;
            }
        );
    };

    onEditButton() {
        this.userSelected = structuredClone(this.userSelected);
        this.isInEditMode = true;
    };

    onFormStatusChange(formStatus: boolean) {
        setTimeout(() => this.enableSaveButton = formStatus, 0);
    };

    onUserFormFirstChange() {
        this.userFormUpdated = true;
    };

    private openConfirmationDialog(
        data: IDialogConfirmationData,
        callback: (value: boolean) => void
    ) {

        const dialogRef = this._matDialog.open(ConfirmationDialogComponent, { data });
        dialogRef.afterClosed().subscribe(callback);
    };

    private saveUserInfos() {
        console.log('antes', structuredClone(this.userSelected));
        
        const newUser: IUser = convertUserFormToUser(this._userFormRawValueService.userFormRawValue);
        console.log('depois', structuredClone(newUser));

        this._updateUserService.updateUser(newUser)
            .subscribe(
                (newUserResponse: IUser) => {
                    if (this.userSelectedIndex === undefined) return;

                    this.usersList[this.userSelectedIndex] = newUserResponse;
                    this.userSelected = structuredClone(newUserResponse);
                }
            );
    };
}
