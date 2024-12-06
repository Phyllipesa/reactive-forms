import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-item',
  templateUrl: './user-info-item.component.html',
  styleUrl: './user-info-item.component.scss'
})
export class UserInfoItemComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
