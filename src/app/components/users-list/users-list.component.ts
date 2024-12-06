import { Component, Input } from '@angular/core';
import { UserListResponse } from '../../type/user-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: UserListResponse = [];

}
