import { FormGroup } from '@angular/forms';

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-phone-list-edit',
    templateUrl: './phone-list-edit.component.html',
    styleUrl: './phone-list-edit.component.scss'
})
export class PhoneListEditComponent {
    @Input({ required: true }) userForm!: FormGroup;
}
