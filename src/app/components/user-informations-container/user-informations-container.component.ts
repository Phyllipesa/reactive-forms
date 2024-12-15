import { IUser } from '../../interfaces/user/user';

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent implements OnChanges {
  currentTabIndex: number = 0;  // Define qual aba do TabsGroup será mostrada ao carregar a pagina.

  @Input({ required: true }) isInEditMode: boolean = false;
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  ngOnChanges(_: SimpleChanges) {
    this.currentTabIndex = 0;
  }
}
